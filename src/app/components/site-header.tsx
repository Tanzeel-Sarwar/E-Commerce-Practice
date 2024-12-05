import Link from "next/link"
import { Search } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="bg-black text-white text-center py-3 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%{" "}
        <Link href="/shop" className="font-bold">
          ShopNow
        </Link>
      </div>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Exclusive
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/about" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/sign-up" className="text-sm hover:underline underline-offset-4">
            Sign Up
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative w-full max-w-sm hidden md:flex">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

