"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/ui/components/button"
import { Input } from "@/ui/components/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/components/card"
import { useThemeStore } from "@/lib/store/theme"
import { useApiQuery } from "@/lib/api-service"
import { Copy, Check } from "lucide-react"

// Lazy load the JSON viewer for better performance
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false })

const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
const SUGGESTIONS = [
  "capybara/names",
  "capybara/countries",
  "capybara/food",
  "capybara/habitats",
  "capybara/activities"
]

export function APIExplorer() {
  const [path, setPath] = useState("capybara/names")
  const [viewRaw, setViewRaw] = useState(false)
  const { isDark } = useThemeStore()
  const [isCopied, setIsCopied] = useState(false);

  const { data: response, isLoading, error, refetch } = useApiQuery<any>(
    ['api-explorer', path],
    path,
    {
      queryKey: ['api-explorer', path],
      enabled: false,
      retry: false
    }
  )

  const handleSuggestionClick = async (suggestion: string) => {
    setPath(suggestion)
    await refetch() // Wait for refetch to complete
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

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
            variant="outline"
            size="sm"
            disabled={!response}
            onClick={handleCopy}
            className="cursor-pointer"
          >
            {isCopied ? (
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4" /> Copied!
              </span>
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
          <Button
            onClick={() => refetch()}
            disabled={isLoading}
            className="w-full sm:w-auto bg-[#cc4b0c] text-red-50 cursor-pointer"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Spinner /> Loading...
              </span>
            ) : 'Submit'}
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
                className="cursor-pointer"
                disabled={isLoading}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {isLoading && path === suggestion ? (
                  <span className="flex items-center gap-2">
                    <Spinner size="sm" /> {suggestion}
                  </span>
                ) : suggestion}
              </Button>
            ))}
          </div>
        </div>

        {error && (
          <div className="text-red-500 p-4 bg-red-50 dark:bg-red-900/20 rounded-md">
            Error: {error.message}
          </div>
        )}

        {response && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Resource for <span className="text-[#C4745C]">{path.split('/')[1]}</span>
            </h3>

            <div className="border rounded-md overflow-hidden">
              {viewRaw ? (
                <pre className="bg-[#F5F5F5] dark:bg-[#1E1E1E] p-4 text-sm overflow-auto max-h-[500px]">
                  {JSON.stringify(response, null, 2)}
                </pre>
              ) : (
                <div className="max-h-[500px] overflow-auto">
                  <ReactJson
                    src={response}
                    theme={isDark ? "tomorrow" : "bright:inverted"}
                    name={null}
                    displayDataTypes={false}
                    collapsed={2}
                    collapseStringsAfterLength={50}
                    style={{ 
                      padding: "1rem", 
                      backgroundColor: "transparent",
                      overflow: "hidden" // Prevent internal scrolling
                    }}
                  />
                </div>
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

// Add this spinner component (create a new file or add to your UI components)
function Spinner({ size = 'default' }: { size?: 'sm' | 'default' }) {
  return (
    <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'
      }`} />
  )
}
