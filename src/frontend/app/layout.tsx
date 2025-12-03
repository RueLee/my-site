import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import { inter, lemonmilk } from "./components/fonts"
import "./globals.css";
import Footer from "./components/footer"
import DesktopNav from "./components/desktop-nav"
import MobileNav from "./components/mobile-nav"
import { ThemeProvider } from "@/app/components/theme-provider"
import ModeToggle from "./components/mode-toggle";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Ruleon Ki Lee",
  description: "Current UC Irvine Student and Computer Science Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header aria-label="Header Label" className={`${lemonmilk.className} p-4`}>
            <div className="flex flex-row items-center justify-between">
              <Link href="/">
                <div className="flex flex-row items-center">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src="/20210626_141437.jpg"
                      alt="RueLee Profile Pic"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="text-[20px] ml-[20px]">Ruleon Lee</p>
                </div>
              </Link>
              <div className="flex items-center">
                <DesktopNav />
                <MobileNav />
                <ModeToggle />
              </div>
            </div>
          </header>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
