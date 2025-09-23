"use client"

import { useEffect } from "react"

export function CursorGlow() {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor-glow::before") as HTMLElement
      if (cursor) {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      }
    }

    // Create cursor element
    const cursor = document.createElement("div")
    cursor.className = "fixed w-5 h-5 pointer-events-none z-[9999] rounded-full"
    cursor.style.background =
      "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 100%)"
    cursor.style.transform = "translate(-50%, -50%)"
    cursor.style.transition = "opacity 0.2s ease"
    document.body.appendChild(cursor)

    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    document.addEventListener("mousemove", updateCursorPosition)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return null
}
