import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/site";
import { Manrope, Newsreader } from "next/font/google";

const isProd = process.env.NODE_ENV === "production";
const repo = "/rhannybelleurbis";
const faviconSrc = isProd ? `${repo}/rnx-logo.png` : "/rnx-logo.png";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | AI Automation Engineer`,
  description: profile.shortBio,
  icons: {
    icon: faviconSrc,
    shortcut: faviconSrc,
    apple: faviconSrc,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} font-sans`}>
        <div className="min-h-screen bg-grid">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
