/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'
import Search from '../Components/Search'
import getApi from '../Services/API'
import Display from '../Components/Display'

function Dashboard() {
  const [query, setQuery] = useState('')
  const [IsLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  // Debounce Optimization
  useEffect(() => {
    // ste1: set new timer on every keystroke with query check and setTimeout
    const timerID = setTimeout(() => {
      if (query.trim()) {
        setIsLoading(true)
        getApi(query).then((data) => {
          console.log(data)
          setProducts(data?.products)
        })
        setIsLoading(false)
      } else {
        setProducts([])
      }
    }, 500)

    // step2: clear previous timer 
    return () => clearTimeout(timerID)
  }, [query])

  return (
    <div id="nav_container">
      <Search query={query} setQuery={setQuery} />
      {IsLoading && <h2>Loading</h2>}
      {!IsLoading && products.length === 0 && <h3>No Results Found</h3>}
      <div id="recipeContainer">
        {products &&
          products?.map((el) => (
            <div key={el.id} className="container">
              <Display {...el} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard
