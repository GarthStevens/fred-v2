'use client'

import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useEffect, useState } from "react";

export function SearchBox() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!input) return setResults([])

    setLoading(true)

    const timeout = setTimeout(() => {
      const allItems = ['1234', '1235', '1236', '1237', '1238']
      const filtered = allItems.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      )
      setResults(filtered)
      setLoading(false)
    }, 300) // debounce

    return () => clearTimeout(timeout)
  }, [input])
  return (
    <Command
    // className="w-full max-w-md rounded-lg border shadow-md"
    >
      <CommandInput
        placeholder="Search..."
        value={input}
        onValueChange={setInput}
      />
      <CommandList>
        {loading && <div className="p-2 text-sm text-muted-foreground">Loading...</div>}
        {!loading && (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            {results.map((item) => (
              <CommandItem key={item} onSelect={() => alert(`Selected ${item}`)}>
                {item}
              </CommandItem>
            ))}
          </>
        )}
      </CommandList>
    </Command>
  )
}
