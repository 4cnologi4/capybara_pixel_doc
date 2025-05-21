"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/ui/components/button"
import { Input } from "@/ui/components/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/components/card"
//import { Badge } from "@/components/ui/badge"

// Lazy load the JSON viewer for better performance
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false })

const API_BASE = "https://api.capybaras.com/v2/"
const SUGGESTIONS = [
  "capybaras/1",
  "capybaras/2",
  "habitats/forest",
  "behaviors/swimming"
]

export function ApiClient() {
  const [endpoint, setEndpoint] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = () => {
    // API call logic here
    setResponse(JSON.stringify({ data: "Sample response" }, null, 2))
  }

  return (
    <Card className="max-w-7xl mx-auto my-12 bg-[#1a1a1c] border-[#2a2a2e]">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-[#f4f4f5]">
          API Explorer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          {/* <Badge variant="secondary">GET</Badge> */}
          <Input
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="Enter endpoint (e.g. /capybaras/1)"
            className="bg-[#0e0e0f] text-white border-[#2a2a2e] flex-1"
          />
          <Button 
            onClick={handleSubmit}
            className="bg-[#ff5f0f] hover:bg-[#cc4b0c] text-white px-4 py-2"
          >
            Send
          </Button>
        </div>

        {response && (
          <pre className="bg-[#0e0e0f] p-4 rounded-md text-[#a1a1aa] overflow-x-auto">
            {response}
          </pre>
        )}
      </CardContent>
    </Card>
  )
}
