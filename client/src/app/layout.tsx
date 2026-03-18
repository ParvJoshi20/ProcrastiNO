import "../styles/globals.css";
import { Fredoka } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ProcrastiNO",
  description: "Stop procrastinating. Start doing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} bg-brandBg text-brandCream min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}