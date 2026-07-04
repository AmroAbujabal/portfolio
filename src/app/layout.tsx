import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/data/content";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const description =
  "Portfolio of Amr Abujabal, a Computer Science student at UBC Okanagan who builds computer-vision pipelines and full-stack apps: PitchVision, World Cup 2026 Predictor, ByteBites.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amr Abujabal — CS Student & Engineer",
  description,
  openGraph: {
    title: "Amr Abujabal — CS Student & Engineer",
    description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="fixed top-3 left-3 z-50 -translate-y-24 rounded bg-fg px-4 py-2 text-sm font-medium text-bg opacity-0 focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
