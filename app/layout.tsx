import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI with Al — AI Ignition for Your Business",
  description:
    "From uncertainty to working AI systems in half a day. Hands-on Claude Code consulting that leaves you with custom SOPs, a clarity plan, and real momentum.",
  openGraph: {
    title: "AI with Al — AI Ignition for Your Business",
    description:
      "From uncertainty to working AI systems in half a day. Hands-on Claude Code consulting.",
    type: "website",
    url: "https://aiwithal.com",
  },
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
