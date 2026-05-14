import "./globals.css";

export const metadata = {
  title: "Apollo Lee",
  description: "I'm a BS/MS student at Stanford studying EE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
