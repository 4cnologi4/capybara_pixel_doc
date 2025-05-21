"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#6d3b1f] text-white px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/capy_api_icon.png"
            alt="Capybara API"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Capybara API</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-[#ff5f0f] transition-colors ${
              pathname === "/" ? "font-bold underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#ff5f0f] transition-colors ${
              pathname === "/about" ? "font-bold underline" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/explorer"
            className={`px-2 py-1 rounded-md hover:bg-[#cc4b0c] ${
              pathname === "/explorer" ? "bg-[#cc4b0c]" : ""
            }`}
          >
            API Explorer
          </Link>
        </div>
      </div>
    </nav>
  )
}