"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function AdminShortcut() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Raccourci: Ctrl + Shift + Y (Y pour Yaak)
      // Fonctionne sur Mac (Cmd/Ctrl) et Windows
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === "KeyY") {
        e.preventDefault()
        router.push("/yaak-studio-2024")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router])

  return null // Composant invisible
}
