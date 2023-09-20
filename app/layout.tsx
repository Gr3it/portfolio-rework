import Footer from "./components/Footer";

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  authors: [{ name: "Emanuele Zini" }],
  colorScheme: "light",
  title: "Emanuele Zini",
  description:
    "I'm a computer science student with a passion for web development and the crypto world. Explore my portfolio to see how I combine my academic background with a love for emerging technologies like cryptocurrencies.",
  other: {
    title: "Emanuele Zini Full-Stack developer portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins h-full flex flex-col items-center text-black bg-light-grey overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
