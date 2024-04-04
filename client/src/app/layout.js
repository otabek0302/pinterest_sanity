import { Lato } from "next/font/google";
import "./globals.css";

import Header from "@/components/sections/Header";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}