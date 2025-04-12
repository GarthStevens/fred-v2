import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "./ui/sidebar"
import { ReactNode } from "react"

type Props = {
  breadcrumb: ReactNode
  actions: ReactNode
}

export function Header(props: Props) {
  const { breadcrumb, actions } = props

  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b p-4 justify-between">
      <div className="flex h-4 items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        {breadcrumb}
      </div>

      <div className="flex h-4 items-center gap-2">
        {actions}
      </div>
    </header>
  )
}