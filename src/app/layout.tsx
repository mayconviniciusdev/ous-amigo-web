import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "OUS - AMIGO SECRETO",
  description: "Sistema de amigo secreto da OUS",
};

export default function RootLayout({children,}: 
  Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[#F6F6F6]">
        {children}
      </body>
    </html>
  );
}