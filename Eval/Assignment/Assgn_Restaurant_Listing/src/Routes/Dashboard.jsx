import { useContext, useState, useEffect } from 'react'
import { GlobalInfo } from '../Context/AppContext'
import RestaurantTable from '../Components/RestaurantTable'
import Pagination from '../Components/Pagination'
function Dashboard() {
  const [data, setData] = useState([])
  const [IsLoading, setIsLoading] = useState(false)
  const { authState, Logout } = useContext(GlobalInfo)
  const [TotalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)
  const Limit = 10
  const FetchData = async () => {
    try {
      setIsLoading(true)
      let Res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${Limit}`
      )
      let ResData = await Res.json()
      setData(ResData?.data || [])
      setTotalPages(ResData?.totalPages || '')
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    FetchData()
  }, [page])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '30px 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header Section */}
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <h1
            style={{
              color: '#333',
              fontSize: '32px',
              fontWeight: '700',
              margin: '0',
            }}
          >
            Restaurant Dashboard
          </h1>
          <button
            data-testid="logout-btn"
            onClick={Logout}
            style={{
              padding: '10px 25px',
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#c0392b'
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 5px 15px rgba(231, 76, 60, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#e74c3c'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Logout
          </button>
        </div>

        {/* Token Display */}
        <div
          style={{
            background: 'white',
            padding: '20px 30px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px',
          }}
        >
          <p
            style={{
              margin: '0',
              color: '#555',
              fontSize: '14px',
            }}
          >
            <span style={{ fontWeight: '600', color: '#333' }}>
              Authentication Token:
            </span>
            <b
              data-testid="user-token"
              style={{
                display: 'block',
                marginTop: '8px',
                color: '#667eea',
                fontSize: '12px',
                wordBreak: 'break-all',
                fontFamily: "'Courier New', monospace",
              }}
            >
              {authState.token ?? 'No token'}
            </b>
          </p>
        </div>

        {/* Table Section */}
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            overflow: 'auto',
            marginBottom: '20px',
          }}
        >
          {IsLoading && (
            <div
              style={{
                textAlign: 'center',
                padding: '50px 20px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  width: '50px',
                  height: '50px',
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #667eea',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
              <h3
                style={{
                  color: '#667eea',
                  marginTop: '20px',
                }}
              >
                Loading restaurants...
              </h3>
            </div>
          )}
          {!IsLoading && data.length === 0 && (
            <h3
              style={{
                textAlign: 'center',
                color: '#999',
                padding: '40px 20px',
              }}
            >
              No Results Found
            </h3>
          )}
          {!IsLoading && data.length > 0 && <RestaurantTable data={data} />}
        </div>

        {/* Pagination Section */}
        {TotalPages > 1 && (
          <div
            data-testid="pagination-container"
            style={{
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Pagination
              totalPages={TotalPages}
              currentPage={page}
              handlePageChange={setPage}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Dashboard
