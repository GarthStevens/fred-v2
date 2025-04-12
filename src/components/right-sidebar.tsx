'use client'

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

export function RightSidebar() {

  return (
    <Sidebar
      collapsible="offcanvas"
      // variant="inset"
      side="right"
      // className="bg-sidebar-primary-foreground"
    >
      <SidebarHeader>
        Quality Assurance
      </SidebarHeader>

      <SidebarContent>
        Issues
      </SidebarContent >

      <SidebarRail  />
    </Sidebar>
  )
}

/*

'use client'

import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarInput, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { NavUser } from "./nav-user";
import { FileCheck, Search } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";

type Props = React.ComponentProps<typeof Sidebar>

export function AppSidebar(props: Props) {
  const { setOpen } = useSidebar()

  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  }

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    F
                  </div>

                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Fred</span>
                    <span className="truncate text-xs">v2.0.0 (beta)</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                <SidebarMenuItem key="search">
                  <SidebarMenuButton
                    className="px-2.5 md:px-2"
                    tooltip={{
                      children: "Search",
                      hidden: false,
                    }}
                    onClick={() => {
                      // setActiveItem(item)
                      // const mail = data.mails.sort(() => Math.random() - 0.5)
                      // setMails(
                      //   mail.slice(
                      //     0,
                      //     Math.max(5, Math.floor(Math.random() * 10) + 1)
                      //   )
                      // )
                      setOpen(true)
                    }}
                  >
                    <Search />
                    <span>Search</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem key="qa">
                  <SidebarMenuButton
                    className="px-2.5 md:px-2"
                    tooltip={{
                      children: "Quality Assurance",
                      hidden: false,
                    }}
                    onClick={() => {
                      // setActiveItem(item)
                      // const mail = data.mails.sort(() => Math.random() - 0.5)
                      // setMails(
                      //   mail.slice(
                      //     0,
                      //     Math.max(5, Math.floor(Math.random() * 10) + 1)
                      //   )
                      // )
                      setOpen(true)
                    }}
                  >
                    <FileCheck />
                    <span>Quality Assurance</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>


        </SidebarContent>

        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      </Sidebar>

      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              Search
            </div>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>

            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}


*/
