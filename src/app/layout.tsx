import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { LeftSidebar } from "@/components/left-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

import { PropsWithChildren } from "react";
import { SearchTriggerButton } from "@/components/search-trigger-button";
import { Button } from "@/components/ui/button";
import { EllipsisIcon, FileWarning, SaveIcon, ViewIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fred v2",
  description: "Fred v2",
};

type Props = PropsWithChildren

export default async function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative flex h-screen">
          <SidebarProvider defaultOpen={false}>
            <LeftSidebar />

            <SidebarInset>
              <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b p-4 justify-between">
                <div className="flex h-4 items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />

                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>12345</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div className="flex h-4 items-center gap-2">
                  <SearchTriggerButton />

                  <Separator orientation="vertical" className="mx-2 h-4" />

                  <Button size="sm">
                    <SaveIcon /> Save
                  </Button>

                  <Button size="sm" variant="outline">
                    <ViewIcon /> Preview
                  </Button>

                  <Button size="sm" variant="outline">
                    <FileWarning /> Issues
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline">
                        <EllipsisIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Complete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>

              <div className="flex-1 overflow-y-scroll p-4">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
