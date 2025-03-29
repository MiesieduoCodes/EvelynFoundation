"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="mr-4 flex items-center w-full">
      {/* Logo/Brand */}
      <Link 
        href="/" 
        className="mr-6 flex items-center space-x-2 group"
        aria-label="Home"
      >
        <Heart className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        <span className="hidden font-bold sm:inline-block text-lg">
          Evelyn Oweibo Foundation
        </span>
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-accent/80 transition-colors",
                    pathname === item.href && "bg-accent text-accent-foreground font-medium",
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="md:hidden ml-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="p-2" 
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Menu className="h-5 w-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight">
                <ul className="grid w-[180px] gap-1 p-2">
                  {navItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block select-none rounded-md p-3 text-sm font-medium no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            pathname === item.href && "bg-accent text-accent-foreground font-medium",
                          )}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}