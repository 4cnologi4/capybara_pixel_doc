"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../../components/ui/button"
import { useThemeStore } from "@/lib/store/theme"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const { isDark, toggleTheme } = useThemeStore()

  const handleTheme = (theme: string) => {
    setTheme(theme)
    toggleTheme()
  }

  return (
    <Button className="cursor-pointer"
      variant="ghost"
      size="icon"
      onClick={() => handleTheme(isDark ? "light" : "dark")}>
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  )
}
