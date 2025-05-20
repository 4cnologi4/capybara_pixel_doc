"use client"

import { useState } from "react"

import { Input } from "@/ui/components/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/components/card"
import { Button } from "./button"

const API_BASE = "https://api.capybaras.com/v2/" // Replace with your API base URL
const SUGGESTIONS = [
  "capybaras/1",
  "capybaras/2",
  "habitats/forest",
  "behaviors/swimming",
  "diet/plants"
]

export function APIClient() {
  const [path, setPath] = useState("")
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      // Mock response - replace with actual fetch
      setResponse({
        id: 1,
        name: "capybara",
        description: "The world's largest rodent",
        habitat: "South American wetlands",
        diet: ["grasses", "aquatic plants"],
        social_behavior: {
          group_size: "10-20",
          hierarchy: "loose"
        }
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
        <CardTitle className="text-2xl">Capybara API Explorer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2">
          <Input
            value={path}
            onChange={(e) => setPath(e.target.value)}
            placeholder="Enter API path (e.g., capybaras/1)"
            className="flex-1"
          />
          <Button onClick={fetchData} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>

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

        {response && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Resource for <span className="text-[#4B3621]">{path || "capybara"}</span>
            </h3>
            
            <div className="bg-[#F5F5F5] dark:bg-[#1E1E1E] p-4 rounded-md font-mono text-sm overflow-x-auto">
              <pre>{JSON.stringify(response, null, 2)}</pre>
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
              <Button variant="outline" size="sm">
                View raw JSON
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
