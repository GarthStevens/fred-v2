import { Header } from "@/components/header";
import { SearchTriggerButton } from "@/components/search-trigger-button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import { EllipsisIcon, FileWarning, SaveIcon, ViewIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const client = await createClient();

  const { data: { user } } = await client.auth.getUser();
  return (
    <>
      <Header
        breadcrumb={(
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
        actions={(
          <>
            <SearchTriggerButton />
          </>
        )}
      />

      <div className="flex-1 overflow-y-scroll p-4">
        <div >
          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </>

  );
}

/*
import { Separator } from "@/components/ui/separator";
import { LeftSidebar } from "@/components/left-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { SearchTriggerButton } from "@/components/search-trigger-button";
import { Button } from "@/components/ui/button";
import { EllipsisIcon, FileWarning, SaveIcon, ViewIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type Props = PropsWithChildren

export default async function RootLayout(props: Props) {
  const { children } = props;

  return (
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
  );
}

*/
