import { NextRequest, NextResponse } from 'next/server'
import images from 'next/image'

export async function GET(request: NextRequest) {
  try {
    // This is where you would typically fetch data from your database
    const products = [
      {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        originalPrice: 160,
        discountedPrice: 120,
        rating: 5,
        reviews: 88,
        discount: "-25%",
        image: "/images/Gamepad.jpg",
      },
      {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        originalPrice: 160,
        discountedPrice: 120,
        rating: 5,
        reviews: 88,
        discount: "-25%",
        image: "/placeholder.svg",
      },
      {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        originalPrice: 160,
        discountedPrice: 120,
        rating: 5,
        reviews: 88,
        discount: "-25%",
        image: "/placeholder.svg",
      },
      {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        originalPrice: 160,
        discountedPrice: 120,
        rating: 5,
        reviews: 88,
        discount: "-25%",
        image: "/placeholder.svg",
      },
      // ... more products
    ]

    console.log('GET /api/products - Successful')
    return NextResponse.json(products)
  } catch (error) {
    console.error('GET /api/products - Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // This is where you would typically save data to your database
    console.log('POST /api/products - Received product data:', data)
    
    return NextResponse.json({ message: "Product created successfully" })
  } catch (error) {
    console.error('POST /api/products - Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

