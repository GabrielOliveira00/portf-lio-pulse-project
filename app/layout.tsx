import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Pulse | SaaS landing page",
  description: "Landing page premium criada para portfolio front-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <div className="site-ambient" aria-hidden />
          <SiteHeader />
          <div className="relative z-10 flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
