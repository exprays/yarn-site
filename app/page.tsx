"use client";
import React, { useEffect } from "react";

import FeaturesPage from "@/components/home/features-page";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import { Tagline } from "@/components/home/tagline";
import Footer from "@/components/home/footer";

export default function Home() {

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col relative h-screen w-full overflow-y-auto dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="p-4">
          <Navbar />
        </div>
        {/* Hero component */}
        <div className="p-4">
          <Hero />
        </div>
        {/** Features */}
        <div className="p-4">
          <FeaturesPage />
        </div>
        {/** Tagline */}
        <div className="p-2">
          <Tagline />
        </div>
        {/** Footer */}
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
