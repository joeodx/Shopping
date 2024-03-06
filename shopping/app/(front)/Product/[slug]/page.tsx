import data from "@/lib/models/data"

export default function ProductDetails({ 
params, 
}: {
params: { slug: string }

}) {
    const product = data.products.find((x)=>x.slug===params.slug)
    if (!product) {
        return <div>Product not found</div>
    }
  return <div>page</div>
  }


