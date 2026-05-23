/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'
import SearchInput from './SearchInput'

function Search() {
  const [query, setQuery] = useState('')
  const [suggestion, setSuggestion] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [iserror, setIsError] = useState(null)

  useEffect(() => {
    const trimmed = encodeURIComponent(query.trim())

    const controller = new AbortController()

    if (!trimmed || trimmed.length < 2) {
      setSuggestion([])
      setIsLoading(false)
      setIsError(null)
      return
    }

    const FetchSearch = async () => {
      try {
        setIsLoading(true)
        setIsError(null)
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${trimmed}`,
          {
            signal: controller.signal,
          }
        )

        const data = await res.json()

        if (!data?.products) {
          throw new Error('Data Not Found')
        }

        setSuggestion(data.products || [])
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log(error)
          setIsError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    const timerID = setTimeout(() => {
      FetchSearch()
    }, 300)

    return () => {
      clearTimeout(timerID)
      controller.abort()
    }
  }, [query])

  return (
    <div className="search_page">
      <div className="search_card">
        <h1 className="search_title">Discover</h1>

        <SearchInput query={query} setQuery={setQuery} />

        {isLoading && <h2 className="status">Loading...</h2>}

        {iserror && <h2 className="error">{iserror}</h2>}

        {!isLoading && query && suggestion.length === 0 && (
          <h2 className="status">No Results Found</h2>
        )}

        <div className="results_container">
          {suggestion?.map((el) => (
            <div className="result_item" key={el.id}>
              <div className="image_wrapper">
                <img src={el.thumbnail} alt={el.title} />
              </div>
              <div className="product_info">
                <h3>{el.title}</h3>
                <div className="meta_row">
                  <p className="price">${el.price}</p>
                  <span className="rating">★ {el.rating}</span>
                </div>
              </div>
              <span className="category">{el.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
