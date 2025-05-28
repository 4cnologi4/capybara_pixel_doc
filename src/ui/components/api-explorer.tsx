"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useThemeStore } from "@/lib/store/theme"
import { useApiQuery } from "@/lib/api-service"
import { Copy, Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Lazy load the JSON viewer for better performance
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false })

const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
const SUGGESTIONS = [
  "capybara/names",
  "capybara/countries",
  "capybara/food",
  "capybara/habitats",
  "capybara/activities",
  "capybara/names/1",
  "capybara/countries/1",
  "capybara/food/1",
  "capybara/habitats/1",
  "capybara/activities/1",
]

export function APIExplorer() {
  const [path, setPath] = useState("capybara/names")
  const [viewRaw, setViewRaw] = useState(false)
  const [viewAsTable, setViewAsTable] = useState(false)
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

  const validateIdParam = (path: string) => {
    const parts = path.split("/");
    if (parts.length === 3
      && parts[0] === "capybara"
      && (parts[1] === "names" || parts[1] === "countries" || parts[1] === "food" || parts[1] === "habitats" || parts[1] === "activities")
      && parts[2] !== undefined
    ) {
      const id = parts[2];
      return !isNaN(Number(id)) && Number.isInteger(Number(id)) && id.trim() !== "";
    }
    return true; // Allow non-ID paths
  };

  const handleSubmit = async () => {
    if (!validateIdParam(path)) {
      alert("Invalid ID: Must be an integer.");
      return;
    }
    await refetch();
  };

  // Utility function to flatten JSON into table rows (only uses `data` field)
  const flattenJsonToTable = (response: any) => {
    if (!response || response.data === null || response.data === undefined) return [];

    const data = response.data;

    if (Array.isArray(data)) {
      // Handle array of objects
      return data.map((item, index) => ({
        id: index,
        ...item,
      }));
    } else if (typeof data === "object") {
      // Handle single object
      return [data];
    } else {
      // Handle primitive values (unlikely for `data` field)
      return [{ value: data }];
    }
  };

  const tableData = flattenJsonToTable(response);
  const isDataNull = response?.data === null || response?.data === undefined;

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
              placeholder="capybara/names/1"
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
            onClick={handleSubmit}
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
                  {JSON.stringify(response, null, 2)} {/* Full JSON */}
                </pre>
              ) : viewAsTable ? (
                <div className="max-h-[500px] overflow-auto">
                  {isDataNull ? (
                    <div className="p-4 text-center text-muted-foreground">
                      {response.message || "No data available."}
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {tableData.length > 0 &&
                            Object.keys(tableData[0]).map((key) => (
                              <TableHead key={key}>{key}</TableHead>
                            ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tableData.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {Object.values(row).map((value, cellIndex) => (
                              <TableCell key={cellIndex}>
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : typeof value === "object"
                                  ? JSON.stringify(value)
                                  : String(value)}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </div>
              ) : (
                <div className="max-h-[500px] overflow-auto">
                  <ReactJson
                    src={response} /* Full JSON */
                    theme={isDark ? "tomorrow" : "bright:inverted"}
                    name={null}
                    displayDataTypes={false}
                    collapsed={2}
                    collapseStringsAfterLength={50}
                    style={{
                      padding: "1rem",
                      backgroundColor: "transparent",
                      overflow: "hidden",
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
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => setViewRaw(!viewRaw)}
                >
                  {viewRaw ? "View Formatted" : "View Raw JSON"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => setViewAsTable(!viewAsTable)}
                  disabled={isDataNull} /* Disable if data is null */
                >
                  {viewAsTable ? "View JSON" : "View as Table"}
                </Button>
              </div>
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
