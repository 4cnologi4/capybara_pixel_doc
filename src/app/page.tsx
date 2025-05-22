import { Banner } from "@/ui/components/banner"
import { APIExplorer } from "@/ui/components/api-explorer"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      {/* Banner */}
      <div className="w-full max-w-4xl">
        <Banner />
      </div>

      {/* API Explorer */}
      <div className="w-full max-w-4xl mt-8">
        <APIExplorer />
      </div>
    </div>
  )
}