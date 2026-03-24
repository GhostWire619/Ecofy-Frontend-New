import fs from "node:fs/promises";
import path from "node:path";
import http from "node:http";

const rootDir = path.resolve("site");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function safeJoin(root, requestPath) {
  const resolved = path.resolve(root, `.${requestPath}`);
  if (!resolved.startsWith(root)) {
    return null;
  }
  return resolved;
}

async function resolveFile(requestPath) {
  const normalized = requestPath === "/" ? "/index.html" : requestPath;
  const candidate = safeJoin(rootDir, normalized);
  if (!candidate) return null;

  try {
    const stat = await fs.stat(candidate);
    if (stat.isDirectory()) {
      const indexPath = path.join(candidate, "index.html");
      await fs.access(indexPath);
      return indexPath;
    }
    return candidate;
  } catch {
    const indexPath = safeJoin(rootDir, path.join(normalized, "index.html"));
    if (!indexPath) return null;
    try {
      await fs.access(indexPath);
      return indexPath;
    } catch {
      return null;
    }
  }
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const filePath = await resolveFile(requestUrl.pathname);

  if (!filePath) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  const file = await fs.readFile(filePath);
  res.writeHead(200, { "content-type": contentType });
  res.end(file);
});

server.listen(port, () => {
  console.log(`Kilimo clone running at http://localhost:${port}`);
});
