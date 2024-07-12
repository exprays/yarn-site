"use client";

import React from 'react';
import { Features } from "./features";

const FeaturesPage = () => {

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
             <div className="w-full max-w-5xl mx-auto pt-8">
                <Features />
             </div>
        </section>
    )
}

export default FeaturesPage;
