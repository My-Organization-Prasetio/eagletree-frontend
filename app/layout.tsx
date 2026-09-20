import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { LocaleDocument } from "@/components/layout/locale-document";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eagletree.id"),
  title: {
    default: "Eagletree | Find a place to belong",
    template: "%s | Eagletree",
  },
  description: "Discover considered homes and properties with Eagletree.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eagletree | Find a place to belong",
    description: "Discover considered homes and properties with Eagletree.",
    url: "https://eagletree.id/",
    siteName: "Eagletree",
      locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/eagletree-logo.png",
        width: 114,
        height: 73,
        alt: "Eagletree",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Eagletree | Find a place to belong",
    description: "Discover considered homes and properties with Eagletree.",
    images: ["/eagletree-logo.png"],
  },
  icons: {
    icon: "/eagletree-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173f35",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <Suspense>
          <SkipLink />
        </Suspense>
        <Suspense>
          <LocaleDocument />
        </Suspense>
        <Suspense>
          <SiteHeader />
        </Suspense>
        <main id="main-content" className="min-h-dvh">
          {children}
        </main>
        <Suspense>
          <SiteFooter />
        </Suspense>
      </body>
    </html>
  );
}
