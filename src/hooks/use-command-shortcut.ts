'use client'

import { useEffect, useState } from 'react'

export function useCommandShortcut(onTrigger: () => void): { isMac: boolean } {
  // Initialize with null to avoid hydration mismatch
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    // Only run this check on the client side
    setIsMac(navigator.userAgent.includes('Mac'))

    const handler = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k'
      const isShortcut = isMac ? e.metaKey : e.ctrlKey

      if (isK && isShortcut) {
        e.preventDefault()
        onTrigger()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onTrigger, isMac])

  return { isMac }
}