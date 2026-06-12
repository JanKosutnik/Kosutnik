import "./globals.css";

export const metadata = {
  title: "Jan Košutnik",
  description: "Jan Košutnik - software and AI, made lighter.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
