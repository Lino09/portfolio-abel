import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const bit = Press_Start_2P({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "Abel Herrera | Web Developer",
  description:
    "Web, React, Javascript, Frontend, Node, Developer, Code Instructor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth cursor-fancy">
      <body className={`${bit.className} text-sm`}>{children}</body>
    </html>
  );
}
