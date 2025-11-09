import type { Product } from "../types"
import { useCallback, useRef, useState } from "react"

type ProductsResponse = {
  products: Product[]
  total: number
}

type UseProductsReturn = {
  fetchData: (skip: number) => Promise<void>
  data: Product[]
  total: number
  isError: boolean
  isLoading: boolean
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const skip = useRef(0)
  const total = useRef(0)

  const fetchData = useCallback(async (skipIncrement: number) => {
    setIsError(false)
    setIsLoading(true)
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip.current + skipIncrement}`)
      if (!response.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const data = (await response.json()) as ProductsResponse
      total.current = data.total
      skip.current += skipIncrement
      setProducts((prevProducts) => [...prevProducts, ...data.products])
    } catch (error) {
      console.error("Failed to fetch products:", error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    fetchData,
    data: products,
    total: total.current,
    isError,
    isLoading,
  }
}
