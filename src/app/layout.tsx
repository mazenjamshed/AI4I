import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI4Ireland - Accelerating Ireland's AI Future",
  description: "AI4Ireland is a consortium of industry, academia, and associations driving urgent action to accelerate Ireland's global positioning in AI literacy and infrastructure.",
  keywords: ["AI4Ireland", "Artificial Intelligence", "Ireland", "AI Literacy", "Digital Transformation", "Industry", "Academia"],
  authors: [{ name: "AI4Ireland Consortium" }],
  openGraph: {
    title: "AI4Ireland - Accelerating Ireland's AI Future",
    description: "Driving urgent action to equip Ireland's industry and population for the AI revolution",
    url: "https://ai4i.ai",
    siteName: "AI4Ireland",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI4Ireland - Accelerating Ireland's AI Future",
    description: "Driving urgent action to equip Ireland's industry and population for the AI revolution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
