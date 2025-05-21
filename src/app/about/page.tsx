import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/ui/components/card"

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
                    <p className="text-muted-foreground">
                        The Capybara API provides comprehensive data about capybaras, including their habitats,
                        behaviors, and characteristics. Our mission is to be the most reliable source of
                        capybara information for developers and researchers worldwide.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                                    className="bg-[#F5F5F5] dark:bg-[#1E1E1E] p-3 rounded-md text-center"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}