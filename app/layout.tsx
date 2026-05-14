import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johni.dev"),
  title: {
    default: "Johni Revormasi Ziliwu - Web Developer",
    template: "%s | Johni Revormasi Ziliwu",
  },
  description:
    "Full Stack Developer & UI/UX Enthusiast based in Bali, Indonesia. Specializing in Next.js, React, Laravel, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer Bali",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer",
    "UI/UX Developer",
    "Johni Revormasi Ziliwu",
    "Portfolio",
  ],
  authors: [{ name: "Johni Revormasi Ziliwu" }],
  creator: "Johni Revormasi Ziliwu",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://johni.dev",
    title: "Johni Revormasi Ziliwu — Full Stack Developer",
    description:
      "Full Stack Developer & UI/UX Enthusiast based in Bali, Indonesia.",
    siteName: "Johni Revormasi Ziliwu Portfolio",
    images: [
      {
        url: "/images/og-image.png", // buat gambar 1200x630px
        width: 1200,
        height: 630,
        alt: "Johni Revormasi Ziliwu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johni Revormasi Ziliwu — Full Stack Developer",
    description:
      "Full Stack Developer & UI/UX Enthusiast based in Bali, Indonesia.",
    images: ["/images/og-image.png"],
    creator: "@johniziliwu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/revormasi-favicon.png", sizes: "32x32", type: "image/png" },
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
},
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"   cz-shortcut-listen="true">
        <ScrollProgressBar />
        <LoadingScreen />
        {/* <CustomCursor/> */}
        <Navbar />
        {children}
        <WhatsAppButton/>
         <Footer />
      </body>
    </html>
  );
}
