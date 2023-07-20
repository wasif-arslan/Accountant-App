import NavBar from "@/views/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import About from "@/views/About";
import Copyright from "@/views/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acountants App By Wasif ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white">
          <NavBar></NavBar>
          {children}
          <About></About>
          <Copyright></Copyright>
        </main>
      </body>
    </html>
  );
}
