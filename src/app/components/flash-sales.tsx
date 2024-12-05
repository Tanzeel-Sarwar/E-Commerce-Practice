"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  originalPrice: number
  discountedPrice: number
  rating: number
  reviews: number
  discount: string
  image: string
}

export function FlashSales() {
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const [timeLeft, setTimeLeft] = React.useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  })

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products. Please try again later.')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds }

        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 }

        const newHours = prev.hours - 1
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 }

        const newDays = prev.days - 1
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 }

        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-red-500 font-semibold">Today's</h2>
            <div className="flex items-center gap-8">
              <h3 className="text-2xl font-semibold">Flash Sales</h3>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-xl font-semibold">{timeLeft.days.toString().padStart(2, "0")}</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                  <div className="text-sm text-muted-foreground">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="relative">
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    {product.discount}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 hover:bg-white/90"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.discountedPrice}</span>
                  <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l.79 3.438a1 1 0 01-1.535 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034a1 1 0 01-1.535-1.118l.79-3.438a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline">View All Products</Button>
        </div>
      </div>
    </section>
  )
}

