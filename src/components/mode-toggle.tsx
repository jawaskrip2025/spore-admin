"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
// import { useAppKitTheme } from "@reown/appkit/react"

export function ModeToggle() {
  // const { themeMode, setThemeMode } = useAppKitTheme()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return <Button size={'icon'} />
  }

  function handleTheme() {
    // setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {
        theme === 'dark' ? (
          <Button onClick={handleTheme} size={'icon'}>
            <Sun />
          </Button>
        ) : (
            <Button onClick={handleTheme} size={'icon'}>
            <Moon />
          </Button>
        )
      }
    </>
  )
}
