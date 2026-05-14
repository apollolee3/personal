import "./globals.css";

export const metadata = {
  title: "Apollo Lee",
  description: "I study EE (BS/MS) at Stanford.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
