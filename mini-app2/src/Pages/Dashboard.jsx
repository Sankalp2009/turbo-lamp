/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr'
import ProductPage from '../Components/ProductPage'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function dashboard() {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products`,
    fetcher
  )

  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {error && <h2>{error}</h2>}
      <ProductPage data={data} />
    </div>
  )
}

export default dashboard
