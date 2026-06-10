import "./globals.css";

export const metadata = {
  title: "Jan Košutnik",
  description: "Jan Košutnik - software and AI, made lighter."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
