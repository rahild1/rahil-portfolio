import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "portfolio website",
  description: "portfolio website made with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        >
        {children}
        </ThemeProvider>
        <Analytics />
        
      </body>
    </html>
  );
}
