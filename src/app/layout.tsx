import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Comfort Channel",
  description: "A place to relax and unwind with your favorite shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        {/* <body className={jost.className}>{children}</body> */}
        <body>{children}</body>
      </html>
    </>
  );
}
