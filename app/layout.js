import "./globals.css";

export const metadata = {
  title: "Ecofy Solutions Ltd",
  description: "Farm analysis, guidance, and market intelligence for modern agriculture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
