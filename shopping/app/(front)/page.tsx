import data from "@/lib/models/data"
import ProductItem from "../components/Products/ProductItem"

export default function Home() {
  return (
  <>
  <h2 className="text-2xl py-2">Latest Products</h2>
  <div className="grid grid-cols-1 gap-4 md:frid-cols-3 lg:grid-cols-4">
    {data.products.map((product) => (
       <ProductItem key={product.slug} />
    ))}
    </div>
  </>
  )
}
