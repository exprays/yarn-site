"use client";

import { TssLogo } from "@/components/assets/tsslogo"
import Link from "next/link";

export default function Footer() {


  return (
    <footer className="py-8">
      <div className="container mx-auto flex flex-row items-center justify-between gap-6 px-4 md:flex-row md:gap-0">
        <div className="flex items-center">
          <TssLogo height={40} width={40}/>
        </div>
        <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Link href="https://github.com/exprays" className="text-muted font-semibold cursor-pointer hover:text-emerald-300">
                Built by exprays
            </Link>
        </nav>
      </div>
    </footer>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}