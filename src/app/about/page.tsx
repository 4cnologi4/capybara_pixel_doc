import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl">About</CardTitle>
                    <CardDescription className="text-lg">
                        What is Capybara API?
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <p>
                                The Capybara API provides comprehensive data about capybaras, 
                                including their habitats, behaviors, and characteristics. 
                                Our mission is to be the most reliable source of capybara 
                                information for developers and researchers worldwide.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/assets/images/capybara_glass_of_wine_2.png"
                                alt="Capybara with wine"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">API Information</h3>
                        <div className="space-y-2">
                            <p>
                                This is a consumption-only API — only the HTTP GET method is available for its resources.
                            </p>
                            <p>
                                No authentication is required to access this API, and all resources are fully open and available. 
                                However, you are limited to only 100 requests per minute.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                "Next.js",
                                "TypeScript",
                                "NestJS",
                                "React",
                                "Tailwind CSS",
                                "shadcn/ui"
                            ].map((tech) => (
                                <div
                                    key={tech}
                                    className="bg-[#F5F5F5] dark:bg-[#1E1E1E] p-3 rounded-md text-center break-words min-h-[80px] flex items-center justify-center"
                                >
                                    <span className="text-sm md:text-base">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}