import { Banner } from "@/ui/components/banner"
import { ApiClient } from "@/ui/components/api-client"


export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-4 md:p-8">
        <ApiClient />
      </div>
    </>
  )
}