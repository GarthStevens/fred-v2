import { Separator } from "@/components/ui/separator";
import { LeftSidebar } from "@/components/left-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { SearchTriggerButton } from "@/components/search-trigger-button";
import { Button } from "@/components/ui/button";
import { EllipsisIcon, FileWarning, SaveIcon, ViewIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Header } from "@/components/header";
import Link from "next/link";

type Props = PropsWithChildren

export default async function RootLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header
        breadcrumb={(
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>12345</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
        actions={(
          <>
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
          </>
        )}
      />

      <div className="flex-1 overflow-y-scroll p-4">
        {children}
      </div>
    </>
  );
}
