'use client'

import { useState } from 'react'
import { CommandDialog, CommandInput, CommandList, CommandItem } from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCommandShortcut } from '@/hooks/use-command-shortcut'

export function SearchTriggerButton() {
  const [open, setOpen] = useState(false)
  const { isMac } = useCommandShortcut(() => setOpen(true))

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className={cn(
          'w-[300px] max-w-sm justify-start text-muted-foreground',
          'pl-2 pr-3 py-2 rounded-md border text-sm font-normal',
          'hover:bg-muted'
        )}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="flex-1 text-left">Search reports...</span>
        <kbd className="pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          {isMac ? <span className="text-xs">⌘</span> : <span className="text-xs">Ctrl + </span>}K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>

        </CommandList>
      </CommandDialog>
    </>
  )
}