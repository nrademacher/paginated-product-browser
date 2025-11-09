import { useProducts } from "./hooks/useProducts"
import { useEffect, useRef } from "react"
import { ProductList } from "./components/ProductList"
import "./App.css"

const SKIP_INCREMENT = 10

function App() {
  const { fetchData, data, isLoading, isError, total } = useProducts()
  const hasFetchedInitialData = useRef(false)

  useEffect(() => {
    if (hasFetchedInitialData.current) {
      return
    }
    hasFetchedInitialData.current = true
    fetchData(0).catch(() => {
      // Handle error silently for initial load
      console.error("Initial fetch failed")
    })
  }, [fetchData])

  async function handleLoadMore() {
    await fetchData(SKIP_INCREMENT)
  }

  // Disable button if loading or all products loaded. Enable on error to allow retry.
  const isLoadMoreDisabled = !isError && (isLoading || data.length >= total)

  return (
    <main className="container">
      <h1>Products</h1>
      {data !== undefined ? <ProductList products={data} /> : null}
      {isLoading && <p className="loading">Loading...</p>}
      {isError && !isLoading && <p className="error">Something went wrong.</p>}
      <button className="load-more-button" onClick={handleLoadMore} disabled={isLoadMoreDisabled}>
        {isError ? "Retry" : "Load More"}
      </button>
    </main>
  )
}

export default App
