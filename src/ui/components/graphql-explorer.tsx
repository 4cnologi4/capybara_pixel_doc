"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function GraphQLExplorer() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">GraphQL Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This is the GraphQL explorer for the Capybara API. Coming soon!
          </p>
          {/* Add your GraphQL explorer implementation here */}
        </div>
      </CardContent>
    </Card>
  )
}
