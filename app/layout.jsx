import "./globals.css";

export const metadata = {
  title: "Jan Košutnik",
  description: "Jan Košutnik — software and AI, made lighter.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Inter-subset.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
