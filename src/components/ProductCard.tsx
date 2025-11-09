import type { Product } from "../types"

export const ProductCard = ({ title, price, description, thumbnail, category }: Product) => {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>
          <strong>Price: </strong>
          {price}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <p>
          <strong>Category: </strong>
          {category}
        </p>
      </div>
    </div>
  )
}
