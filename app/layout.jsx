import "./globals.css";

export const metadata = {
  title: "KOSUTNIK",
  description: "A personal website and public thinking space by Jan Kosutnik."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
