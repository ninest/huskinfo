import { CommandMenu } from "@/app/command-menu";
import "./globals.css";

import { NavRail } from "@/app/nav-rail";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "jotai";
import type { Metadata } from "next";
import { Karla, Inter, JetBrains_Mono } from "next/font/google";
import { getLinks } from "@/modules/content/link";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const huskerLinks = await getLinks();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${karla.variable} font-sans h-full text-foreground dark:text-foreground flex`}
      >
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <Toaster />
            <CommandMenu links={huskerLinks} />
            <div className="hidden md:block">
              <NavRail />
            </div>
            <div className="flex-1">{children}</div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
