// components/skip-to-content.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function SkipToContent() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.getElementById('skip-to-content')?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Button
      id="skip-to-content"
      variant="outline"
      className="absolute left-4 top-4 -translate-y-16 focus:translate-y-0 transition-transform z-50"
      onClick={() => {
        document.getElementById('main-content')?.focus()
        router.push('#hero')
      }}
    >
      Skip to content
    </Button>
  )
}