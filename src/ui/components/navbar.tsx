"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/ui/components/navigation-menu"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#4B3621] text-white sticky top-0 z-50 h-[60px]">
      <div className="w-full px-4 flex justify-between items-center h-full max-w-7xl mx-auto">
        {/* Logo on left */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/assets/images/capy_api_icon.png"
            alt="Capybara Pixel"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold text-sm">Capybara API</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="h-full gap-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} h-full text-white ${
                      pathname === "/" 
                        ? "bg-[#8B5A2B]" 
                        : "bg-transparent hover:bg-[#8B5A2B]/50"
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} h-full text-white ${
                      pathname === "/about" 
                        ? "bg-[#8B5A2B]" 
                        : "bg-transparent hover:bg-[#8B5A2B]/50"
                    }`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} h-full text-white opacity-50 cursor-not-allowed bg-transparent`}
                >
                  GraphQL (coming soon)
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 right-0 bg-[#4B3621] shadow-lg">
            <div className="flex flex-col py-2">
              <Link
                href="/"
                className={`px-4 py-3 text-white ${
                  pathname === "/" 
                    ? "bg-[#8B5A2B]" 
                    : "hover:bg-[#8B5A2B]/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-3 text-white ${
                  pathname === "/about" 
                    ? "bg-[#8B5A2B]" 
                    : "hover:bg-[#8B5A2B]/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 py-3 text-white opacity-50 cursor-not-allowed">
                GraphQL (coming soon)
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}