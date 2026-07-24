import type { Metadata } from "next";
import { Inter, Newsreader, IBM_Plex_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Vexeral — AI Automation Agency & Growth Engineering",
    template: "%s | Vexeral",
  },
  description:
    "Vexeral is an AI automation agency specializing in business process automation and lead generation systems. We build high-leverage workflows that scale operations.",
  metadataBase: new URL("https://vexeral.com"),
  openGraph: {
    title: "Vexeral — AI Automation Agency & Growth Engineering",
    description:
      "Vexeral specializes in business process automation, CRM workflows, and AI-powered lead generation systems.",
    url: "https://vexeral.com",
    siteName: "Vexeral",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexeral — AI Automation Agency",
    description:
      "Business process automation and AI growth engineering. We design systems that scale your operations.",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vexeral",
  url: "https://vexeral.com",
  logo: "https://vexeral.com/logo.png",
  description: "Vexeral designs and deploys AI-powered automation — chatbots, voice agents, and workflow systems built around how your business actually operates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, newsreader.variable, plexMono.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)", paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)" }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}</body>
    </html>
  );
}
