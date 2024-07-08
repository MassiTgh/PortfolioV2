import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Massinissa Tighdine",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: 
Readonly<{children: React.ReactNode;}>) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">{children}</body>
    </html>
  );
}
