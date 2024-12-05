import { SiteHeader } from "@/app/components/site-header"
import { Sidebar } from "@/app/components/sidebar"
import { HeroSection } from "@/app/components/hero-section"
import { FlashSales } from "@/app/components/flash-sales"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container py-6">
        <div className="flex gap-8">
          <Sidebar />
          <div className="flex-1 space-y-8">
            <HeroSection />
            <FlashSales />
          </div>
        </div>
      </main>
    </div>
  )
}

