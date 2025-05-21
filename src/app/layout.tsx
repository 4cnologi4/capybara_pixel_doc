import { ThemeProvider } from "@/ui/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/ui/components/navbar"
import { Footer } from "@/ui/components/footer"

export const metadata: Metadata = {
  title: "Capybara API | The Ultimate Capybara Data Source",
  description: "Comprehensive API for capybara data, behaviors, and habitats",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <div className="mx-auto w-full max-w-7xl px-6 py-12">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
