import { Product } from "@/lib/models/ProductModel"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function ProductItem({ product }: {product: Product}) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
        <figure>
          <Link href={`/product/${product.slug}`}>
              <Image
               src={product.image}
               alt={product.name}
               width={300}
               height={300}
               className="object-cover h-64 w-full"
          />
            </Link>
        </figure>
        <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
          </div>
        </div>
  )
}
