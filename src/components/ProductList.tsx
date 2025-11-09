import type { Product } from "../types"
import { ProductCard } from "./ProductCard"

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
