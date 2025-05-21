"use client"

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/ui/components/card"
import Image from "next/image"

export function Banner() {
    return (
        <section className="bg-[#1a1a1c] text-[#f4f4f5] py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="rounded-full bg-[#2a2a2e] p-4 mb-6">
                    <Image
                        src="/assets/images/capy_api_icon.png"
                        alt="Capybara"
                        width={80}
                        height={80}
                        className="h-20 w-20"
                    />
                </div>
                
                <Card className="bg-[#2a2a2e] border-[#3f3f46] w-full max-w-3xl">
                    <CardHeader>
                        <h1 className="text-2xl md:text-3xl font-bold text-center">
                            Welcome to Capybara API
                        </h1>
                    </CardHeader>
                    <CardContent className="text-center text-[#a1a1aa]">
                        <p>
                            The most comprehensive API for capybara data, behaviors, and habitats.
                            Perfect for developers and researchers.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
