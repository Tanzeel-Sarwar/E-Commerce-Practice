import Link from "next/link"

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
]

export function Sidebar() {
  return (
    <div className="w-64 hidden md:block">
      <h2 className="font-bold mb-4">Exclusive</h2>
      <nav className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="block py-2 text-sm hover:text-primary transition-colors"
          >
            {category}
          </Link>
        ))}
      </nav>
    </div>
  )
}

