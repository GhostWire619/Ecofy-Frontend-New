import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SiteLanguageProvider } from "@/components/providers/site-language-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ecofy Africa | Msaidizi wa Mkulima",
  description:
    "Ecofy huwasaidia wakulima kupanga msimu, kufuata kazi za shamba na kutunza kumbukumbu kwa urahisi.",
  keywords:
    "agriculture, farming, agritech, Tanzania, Africa, farm intelligence, market access, smallholder farmers",
  icons: {
    icon: "/ecofy icon.png",
    apple: "/ecofy icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sw" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QRJ3WKXWK1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QRJ3WKXWK1');
          `}
        </Script>
      </head>
      <body className="font-[var(--font-inter)] antialiased">
        <SiteLanguageProvider>{children}</SiteLanguageProvider>
      </body>
    </html>
  );
}
