import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function GraphQLExplorerPage() {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl">GraphQL Explorer</CardTitle>
                    <CardDescription className="text-lg">
                        Explore the Capybara API with GraphQL
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <p>
                                This is the GraphQL interface for the Capybara API. 
                                Here you can query all available capybara data using 
                                GraphQL syntax. The explorer will help you build 
                                queries and visualize responses.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/assets/images/capybara_programming_v2.png"
                                alt="Capybara API"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Coming Soon Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                "Query Builder",
                                "Schema Explorer",
                                "Response Visualizer",
                                "Authentication",
                                "Documentation",
                                "Examples"
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className="bg-[#F5F5F5] dark:bg-[#1E1E1E] p-3 rounded-md text-center break-words min-h-[80px] flex items-center justify-center"
                                >
                                    <span className="text-sm md:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
