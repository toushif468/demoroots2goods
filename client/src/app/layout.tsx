import type { Metadata } from "next";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata: Metadata = {
  title: "Roots2Goods",
  description: "This is an Agricultural Supply Chain Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
