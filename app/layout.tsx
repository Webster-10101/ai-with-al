import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI with Al — Practical AI Workshops for Teams",
  description:
    "Practical AI workshops and implementation for founders, agencies, and small teams. Cut through the hype, focus on what works, and leave with usable systems.",
  openGraph: {
    title: "AI with Al — Practical AI Workshops for Teams",
    description:
      "Cut through the hype and build practical AI workflows your team will actually use.",
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
      <head>
        <script src="https://cdn.usefathom.com/script.js" data-site="ZYGWDTLR" defer />
      </head>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
