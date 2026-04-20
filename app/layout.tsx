import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iAWriterDuo = localFont({
  src: "./fonts/iAWriterDuoV.ttf",
  variable: "--font-ia-writer-duo",
});

export const metadata: Metadata = {
  title: "Jan Kosutnik",
  description: "",
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
      <body className={`${iAWriterDuo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
