import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSY International Group | Global Trading, Shipping, Food & Supermarkets",
  description:
    "Dubai-headquartered trading, shipping and food group founded in 1974. Connecting origins to markets across Asia, the Gulf and Africa.",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('gsy-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-dvh font-sans antialiased selection:bg-gsy-gold-light selection:text-gsy-navy"
      >
        {children}
      </body>
    </html>
  );
}
