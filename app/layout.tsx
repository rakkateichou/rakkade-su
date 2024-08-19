import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "./_components/menu";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "rakkade.su",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky -top-[1px] z-50 bg-gray pt-6">
          <Menu />
        </div>
        <div className="m-auto">{children}</div>
        <SpeedInsights />
      </body>
    </html>
  );
}
