import { Banner } from "@/ui/components/banner"
import { APIExplorer } from "@/ui/components/api-explorer"

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-4 md:p-8">
        <APIExplorer />
      </div>
    </>
  )
}