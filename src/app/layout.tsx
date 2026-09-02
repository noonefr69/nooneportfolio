import type { Metadata } from "next";
import "./globals.css";
import AsideNav from "@/components/navigation/aside-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import LilNavigator from "@/components/navigation/lil-na/lil-navigator";
import FooterSection from "@/components/landing/footer-section/footer";
import { Toaster } from "@/components/ui/sonner";
import MobileViewNavigation from "@/components/navigation/mobile-view-navigation";
import localfont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: "noone",
    template: "noone - %s",
  },
  description: "noone portfolio | best in world | i'm kidding",
};

const firaCode = localfont({
  src: [
    {
      path: "../fonts/Fira_Code/static/FiraCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Fira_Code/static/FiraCode-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Fira_Code/static/FiraCode-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Fira_Code/static/FiraCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full ${firaCode.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <MobileViewNavigation />
            <main className="flex gap-2 max-w-7xl min-w-0 w-full mx-auto">
              <div className="flex-1 min-w-0 pl-2 lg:pr-0 pr-2">
                <LilNavigator />
                {children}
                <Toaster />
                <FooterSection />
              </div>
              <aside className="p-10 hidden lg:flex flex-col items-center shrink-0">
                <AsideNav />
              </aside>
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
