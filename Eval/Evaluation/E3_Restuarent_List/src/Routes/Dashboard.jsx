import Loader from '../Components/Loader'
import { useState, useContext, useEffect } from 'react'
import { GlobalInfo } from '../Context/AppContext'
import { getRestaurantsList } from '../Services/API.js'
import RestaurantTable from '../Components/RestaurantTable'

function Dashboard() {
  // State Handling
  const [product, setProduct] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [FilteredData, setFilteredData] = useState([]);
  const { authState, LogOut } = useContext(GlobalInfo);
  const [IsLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const Limit = 10;

  const HandleFilter = (e) => {
    const { value } = e.target

    if (value === '') {
      setFilteredData(product)
    } else {
      const results = product.filter((item) => item.type === value)

      setFilteredData(results)
    }
  }

  // API Handling
  useEffect(() => {
    setIsLoading(true)

    getRestaurantsList(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${Limit}`
    )
      .then((data) => {
        console.log(data)
        setProduct(data?.data)
        setFilteredData(data?.data)
        setTotalPages(data?.totalPages)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={LogOut}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState?.token ?? ''}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box" onChange={HandleFilter}>
          <option value="">All</option>
          {[...new Set(product.map((el) => el.type))].map((type) => (
            <option key={type} value={type}>
              {type
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {IsLoading && <Loader />}
        {!IsLoading && product.length === 0 && <h3>No Results Found</h3>}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
        <RestaurantTable product={FilteredData} />
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}</div>
    </div>
  )
}

export default Dashboard
