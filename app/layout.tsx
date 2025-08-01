import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Movie Diary",
  description: "Log movies",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
