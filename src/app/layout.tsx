import { ThemeProvider } from "@/ui/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/ui/components/navbar"
import { Footer } from "@/ui/components/footer"

export const metadata: Metadata = {
  title: "Funny Capybara API",
  description: "A Funny Capybara API",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className="font-roboto min-h-screen w-full [&>*]:m-0 [&>*]:p-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
