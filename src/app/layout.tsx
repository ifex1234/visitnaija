import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visit tourist centers in Nigeria ",
  description: "Visit Nigeria for premium nature and tourism experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` relative`}>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
