import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
