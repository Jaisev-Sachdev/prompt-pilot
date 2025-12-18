import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";

const neueMontreal = localFont({
  src: "../app/fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue-montreal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "PromptPilot AI - Predictive Context Injection for AI Prompts",
  description: "Transform your prompts with AI-powered predictive context injection. PromptPilot AI enhances your prompts with intelligent tags for better AI responses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} antialiased font-sans flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
