"use client";

import Image from "next/image";
import BlurIn from "../custom/blur-in";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Hero = () => {

    const router = useRouter();

    const onClick = () => {
        router.push("https://app.yarn.thestarsociety.tech")
    }

    return (
        <section className="w-full py-12 items-center justify-center">
            <Blur />
            <div className="container flex flex-col items-center justify-center px-4 md:px-6 space-y-20">
                <div className="text-center space-y-4">
                    <BlurIn word="Yarn" className="text-7xl font-bold tracking-tighter sm:text-8xl md:text-9xl lg:text-[100px]/none" />
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        Introducing a powerful opensource platform that helps you to chat with security and ease.
                    </p>
                    <Button className="mt-4" onClick={onClick}>
                        Get Started
                    </Button>
                </div>
                <Blur />
                <div className="w-full max-w-4xl md:max-w-6xl mx-auto relative">
                    <div className="relative rounded-2xl bg-gray-300 dark:bg-gray-800 p-4 shadow-lg">
                        <div className="rounded-lg overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                            <AspectRatio ratio={16 / 10} className="bg-black">
                                <Image 
                                    src="/mountain.jpg"
                                    alt="hero"
                                    fill
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Blur() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
        >
            <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-br from-violet-500 to-purple-400 dark:from-fuchsia-700"></div>
            <div className="fix-safari-blur blur-[106px] h-32 bg-gradient-to-r from-fuchsia-400 to-purple-300 dark:to-violet-600"></div>
        </div>
    );
}