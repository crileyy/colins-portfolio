import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";

const asap = Asap({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Colin's portfolio",
  description: "Colin's personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={asap.className}>
        <header>header</header>
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
