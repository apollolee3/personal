import "./globals.css";

export const metadata = {
  title: "Apollo Lee",
  description: "I study EE at Stanford and grew up in New Jersey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
