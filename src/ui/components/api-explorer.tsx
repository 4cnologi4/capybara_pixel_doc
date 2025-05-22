"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/ui/components/button"
import { Input } from "@/ui/components/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/components/card"
import { useThemeStore } from "@/lib/store/theme"

// Lazy load the JSON viewer for better performance
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false })

const API_BASE = "https://api.capybaras.com/v2/"
const SUGGESTIONS = [
  "capybaras/1",
  "capybaras/2",
  "habitats/forest",
  "behaviors/swimming"
]

export function APIExplorer() {
  const [path, setPath] = useState("capybaras/1") // Default suggestion
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [viewRaw, setViewRaw] = useState(false)
  const { isDark } = useThemeStore()

  const fetchData = async () => {
    setLoading(true)
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 800))
      setResponse({
        id: 1,
        name: "capybara",
        scientific_name: "Hydrochoerus hydrochaeris",
        description: "The world's largest rodent",
        habitat: {
          type: "wetlands",
          region: "South America",
          countries: ["Brazil", "Venezuela", "Colombia"]
        },
        diet: ["grasses", "aquatic plants", "fruits"],
        social_behavior: {
          group_size: "10-20",
          hierarchy: "loose",
          communication: ["vocalizations", "scent marking"]
        },
        conservation_status: "Least Concern"
      })
    } catch (error) {
      setResponse({ error: "Failed to fetch data" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Capybara API Explorer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex flex-col sm:flex-row gap-2">
            <span className="text-sm font-medium bg-[#F5F5F5] dark:bg-[#1E1E1E] px-3 py-2 rounded-md whitespace-nowrap overflow-x-auto">
              {API_BASE}
            </span>
            <Input
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="capybaras/1"
              className="flex-1 min-w-0"
            />
          </div>
          <Button
            onClick={fetchData}
            disabled={loading}
            className="w-full sm:w-auto bg-[#cc4b0c] text-red-50"
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Need a hint? Try:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => {
                  setPath(suggestion)
                  fetchData()
                }}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        {response && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Resource for <span className="text-[#C4745C]">{path.split('/')[0]}</span>
            </h3>

            <div className="border rounded-md overflow-hidden">
              {viewRaw ? (
                <pre className="bg-[#F5F5F5] dark:bg-[#1E1E1E] p-4 text-sm overflow-x-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              ) : (
                <ReactJson
                  src={response}
                  theme={isDark ? "tomorrow" : "summerfruit:inverted"}
                  name={null}
                  displayDataTypes={false}
                  collapsed={2}
                  collapseStringsAfterLength={50}
                  style={{ padding: "1rem", backgroundColor: "transparent" }}
                />
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href={`${API_BASE}${path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8B5A2B] hover:underline"
              >
                Direct link to results
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewRaw(!viewRaw)}
              >
                {viewRaw ? "View Formatted" : "View Raw JSON"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
