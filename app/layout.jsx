import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  title: "Jan Košutnik",
  description: "Jan Košutnik - software and AI, made lighter.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
