import { ThemeProvider } from "@/ui/theme-provider"
import "./globals.css"


export const metadata = {
  title: "Funny Capybara API",
  description: "A Funny Capybara API",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-roboto min-h-screen w-full [&>*]:m-0 [&>*]:p-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
