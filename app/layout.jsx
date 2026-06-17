import "./globals.css";

export const metadata = {
  title: "Jan Košutnik — garden",
  description: "Jan Košutnik — Ljubljana. A garden, not a blog.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preload" href="/fonts/Inter-subset.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz@1,18&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
