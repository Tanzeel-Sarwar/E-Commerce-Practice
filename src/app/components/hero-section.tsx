"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative h-[400px] bg-black">
        <div className="absolute inset-0 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="ml-4 text-white">
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="text-white space-y-4 px-8">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Apple"
                width={40}
                height={40}
                className="rounded-full bg-white p-2"
              />
              <span>iPhone 14 Series</span>
            </div>
            <h1 className="text-5xl font-bold">Up to 10%</h1>
            <h2 className="text-4xl">off Voucher</h2>
            <Link
              href="/shop"
              className="inline-block border-b border-white pb-1 hover:border-primary transition-colors"
            >
              Shop Now
            </Link>
          </div>
          <Button variant="ghost" size="icon" onClick={nextSlide} className="mr-4 text-white">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

