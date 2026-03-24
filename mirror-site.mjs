import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://kilimo.io/";
const SITE_ORIGIN = new URL(SITE_URL).origin;
const OUT_DIR = path.resolve("site");
const USER_AGENT = "Mozilla/5.0 (compatible; CodexSiteMirror/1.0)";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const downloaded = new Map();
const pending = new Set();

function normalizeUrl(raw) {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (
    trimmed.startsWith("data:") ||
    trimmed.startsWith("javascript:") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("#")
  ) {
    return null;
  }

  let absolute;
  if (trimmed.startsWith("//")) {
    absolute = `https:${trimmed}`;
  } else {
    try {
      absolute = new URL(trimmed, SITE_URL).toString();
    } catch {
      return null;
    }
  }

  return absolute;
}

function isKilimoAsset(url) {
  try {
    const parsed = new URL(url);
    if (parsed.origin !== SITE_ORIGIN) {
      return false;
    }

    const pathname = parsed.pathname.toLowerCase();
    const ext = path.extname(pathname);
    if (
      [
        ".css",
        ".js",
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".svg",
        ".webp",
        ".woff",
        ".woff2",
        ".ttf",
        ".eot",
        ".ico",
        ".json",
        ".xml",
      ].includes(ext)
    ) {
      return true;
    }

    return pathname.includes("/wp-content/") || pathname.includes("/wp-includes/");
  } catch {
    return false;
  }
}

function localPathForUrl(url) {
  const parsed = new URL(url);
  let filePath = decodeURIComponent(parsed.pathname);

  return path.join(OUT_DIR, filePath.replace(/^\/+/, ""));
}

function localRefForUrl(url) {
  const parsed = new URL(url);
  let filePath = decodeURIComponent(parsed.pathname);

  return `.${filePath}`;
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": USER_AGENT },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function fetchBuffer(url) {
  const response = await fetch(url, {
    headers: { "user-agent": USER_AGENT },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

function extractUrlsFromCss(cssText, baseUrl) {
  const matches = [];
  const regex = /url\((['"]?)(.*?)\1\)/g;
  for (const match of cssText.matchAll(regex)) {
    const normalized = normalizeUrl(new URL(match[2], baseUrl).toString());
    if (normalized && isKilimoAsset(normalized)) {
      matches.push(normalized);
    }
  }
  return matches;
}

function rewriteCss(cssText, baseUrl) {
  return cssText.replace(/url\((['"]?)(.*?)\1\)/g, (full, quote, rawUrl) => {
    let absolute;
    try {
      absolute = normalizeUrl(new URL(rawUrl, baseUrl).toString());
    } catch {
      return full;
    }

    if (!absolute || !isKilimoAsset(absolute)) {
      return full;
    }

    const localRef = localRefForUrl(absolute);
    return `url(${quote}${localRef}${quote})`;
  });
}

function extractUrlsFromHtml(html) {
  const urls = new Set();
  const regexes = [
    /(src|href|data-lazyload|data-bg|poster)=["']([^"']+)["']/g,
    /content=["'](https?:\/\/kilimo\.io[^"']+)["']/g,
  ];

  for (const regex of regexes) {
    for (const match of html.matchAll(regex)) {
      const candidate = normalizeUrl(match[2] ?? match[1]);
      if (candidate && isKilimoAsset(candidate)) {
        urls.add(candidate);
      }
    }
  }

  for (const match of html.matchAll(/srcset=["']([^"']+)["']/g)) {
    for (const part of match[1].split(",")) {
      const [candidate] = part.trim().split(/\s+/);
      const normalized = normalizeUrl(candidate);
      if (normalized && isKilimoAsset(normalized)) {
        urls.add(normalized);
      }
    }
  }

  return [...urls];
}

function rewriteHtml(html) {
  let output = html;

  const urlPattern =
    /https?:\/\/kilimo\.io[^"'()\s<>]+|\/\/kilimo\.io[^"'()\s<>]+/g;
  output = output.replace(urlPattern, (raw) => {
    const absolute = normalizeUrl(raw);
    if (!absolute || !isKilimoAsset(absolute)) {
      return raw;
    }
    return localRefForUrl(absolute);
  });

  return output;
}

async function downloadAsset(url) {
  if (downloaded.has(url) || pending.has(url)) {
    return;
  }
  pending.add(url);

  try {
    const destination = localPathForUrl(url);
    await ensureDir(destination);

    const extension = path.extname(new URL(url).pathname).toLowerCase();
    const isTextAsset =
      [".css", ".js", ".json", ".html", ".xml", ".txt", ".svg"].includes(extension) ||
      extension === "";

    try {
      if (isTextAsset && extension === ".css") {
        const cssText = await fetchText(url);
        const nestedAssets = extractUrlsFromCss(cssText, url);
        await Promise.all(nestedAssets.map(downloadAsset));
        const rewrittenCss = rewriteCss(cssText, url);
        await fs.writeFile(destination, rewrittenCss);
      } else if (isTextAsset) {
        const text = await fetchText(url);
        await fs.writeFile(destination, text);
      } else {
        const buffer = await fetchBuffer(url);
        await fs.writeFile(destination, buffer);
      }

      downloaded.set(url, destination);
    } catch (error) {
      console.warn(`Skipping ${url}: ${error.message}`);
    }
  } finally {
    pending.delete(url);
  }
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const html = await fetchText(SITE_URL);
  const assetUrls = extractUrlsFromHtml(html);
  await Promise.all(assetUrls.map(downloadAsset));

  const rewrittenHtml = rewriteHtml(html);
  await fs.writeFile(path.join(OUT_DIR, "index.html"), rewrittenHtml);

  console.log(`Mirrored ${assetUrls.length} homepage asset references into ${OUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
