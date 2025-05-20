import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/ui/components/card"
import { Navbar } from "@/ui/components/navbar"
import { Banner } from "@/ui/components/banner"
import { APIClient } from "@/ui/components/api-client"


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto p-4 md:p-8">
        <APIClient />
      </div>
      <div className="min-h-screen flex items-center justify-center p-8">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Capybara API</CardTitle>
            <CardDescription>Your friendly neighborhood capybara documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore the wonderful world of capybaras through our RESTful API.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}