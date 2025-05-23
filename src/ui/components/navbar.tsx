"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Active route check
  const isActive = (path: string) => pathname === path

  return (
    <nav className="w-full bg-[#6d3b1f] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/capy_api_icon_v3.png"
              alt="Capybara API"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="font-bold">Capybara API</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`hover:text-[#ff5f0f] transition-colors ${
                isActive('/') ? 'font-bold bg-[#cc4b0c] rounded-md px-3 py-1' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-[#ff5f0f] transition-colors ${
                isActive('/about') ? 'font-bold bg-[#cc4b0c] rounded-md px-3 py-1' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/graphql"
              className={`hover:text-[#ff5f0f] transition-colors ${
                isActive('/graphql') ? 'font-bold bg-[#cc4b0c] rounded-md px-3 py-1' : ''
              }`}
            >
              GraphQL (coming soon)
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-1 hover:text-[#ff5f0f]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#6d3b1f] px-6 pb-4 space-y-3">
          <Link 
            href="/" 
            className={`block hover:text-[#ff5f0f] ${
              isActive('/') ? 'font-bold bg-[#cc4b0c] rounded-md px-3 py-1' : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`block hover:text-[#ff5f0f] ${
              isActive('/about') ? 'font-bold bg-[#cc4b0c] rounded-md px-3 py-1' : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/graphql"
            className={`block hover:text-[#ff5f0f] ${
              isActive('/graphql') ? 'font-bold bg-[#cc4b0c] rounded-md px-3 py-1' : 'opacity-50'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            GraphQL (coming soon)
          </Link>
        </div>
      )}
    </nav>
  )
}