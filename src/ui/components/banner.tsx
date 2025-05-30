"use client"

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card"
import Image from "next/image"

export function Banner() {
    return (
        <div className="w-full flex justify-center py-12">
            <Card className="w-full">
                <CardHeader className="items-center text-center">
                    <Image
                        src="/assets/images/capy_api_icon_v4.png" // Update with your image path
                        alt="Capybara"
                        width={200}
                        height={200}
                        className="rounded-full mb-4 mx-auto"
                    />
                    <CardTitle className="text-3xl">Welcome to Capybara API</CardTitle>
                    <CardDescription className="text-lg">
                        The most comprehensive capybara data source on the web
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p>
                        Access hundreds of capybara facts, images, and behaviors through our easy-to-use API
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
