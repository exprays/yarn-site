"use client";

import { BentoCard, BentoGrid } from "@/components/custom/bento-grid";
import { ImageIcon } from "@radix-ui/react-icons";
import { Bot, TextCursorInput, SquarePlay } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "../custom/vanish-input";
import { useEffect, useState } from "react";
import { Vortex } from "../custom/vortex";

const placeholders = [
  "/yarnbot What's the first rule of Fight Club?",
  "/yarnbot Who is Tyler Durden?",
  "/yarnbot Where is Andrew Laeddis Hiding?",
  "/yarnbot Write a Javascript method to reverse a string",
  "/yarnbot How to assemble your own PC?",
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

const features = [
  {
    Icon: SquarePlay,
    name: "Efficient Video calls",
    description: "Easy video and audio chats over group.",
    href: "/",
    cta: "",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3",
    background: (
      <div className="relative flex py-8 px-2 gap-10 h-[570px]">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/video.png"
            priority={true}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
    ),
  },
  {
    Icon: ImageIcon,
    name: "Easy file sharing",
    description: "Image, video, and document sharing made easy.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    background: (
      <ImageSection />
    ),
  },
  {
    Icon: Bot,
    name: "AI Chatbot in your server",
    description: "Currently in development stage so you have to request access for now!",
    className: "col-span-3 lg:col-span-2",
    href: "/",
    cta: "Learn more",
    background: (
        <div className="pt-20 flex flex-col space-y-8">
          <h2 className="text-xl text-center sm:text-5xl dark:text-white text-black">
          Ask Yarn AI Anything
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        </div>
    ),
  },
  {
    Icon: TextCursorInput,
    name: "Full text search",
    description: "Search through your server in less than 2ms",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
      </Vortex>
    ),
  }
];

export const Features = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export function ImageSection() {
  const [rotations, setRotations] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate random rotations on the client side
    const newRotations = Array(10).fill(0).map(() => Math.random() * 20 - 10);
    setRotations(newRotations);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={`images-first-${idx}`}
            variants={imageVariants}
            style={{
              rotate: rotations[idx] || 0,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={`images-second-${idx + images.length}`}
            variants={imageVariants}
            style={{
              rotate: rotations[idx + images.length] || 0,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};