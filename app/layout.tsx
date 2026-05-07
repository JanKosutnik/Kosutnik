import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const iAWriterDuo = localFont({
  src: "./fonts/iAWriterDuoV.ttf",
  variable: "--font-ia-writer-duo",
});

export const metadata: Metadata = {
  title: "Jan Kosutnik",
  description: "",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`}} />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8VK2LZW8F9" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8VK2LZW8F9');`}
      </Script>
      <body className={`${iAWriterDuo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
