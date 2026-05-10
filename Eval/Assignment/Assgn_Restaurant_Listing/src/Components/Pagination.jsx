function createArrayOfSize(n) {
  return new Array(n).fill(0)
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  let pages = createArrayOfSize(totalPages).map((_, index) => {
    const pageNumber = index + 1
    const isCurrentPage = pageNumber === currentPage
    return (
      <button
        key={pageNumber}
        data-testid="page-btn"
        disabled={isCurrentPage}
        onClick={() => !isCurrentPage && handlePageChange(pageNumber)}
        style={{
          padding: '10px 15px',
          margin: '0 5px',
          border: isCurrentPage ? 'none' : '1px solid #ddd',
          borderRadius: '5px',
          background: isCurrentPage
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'white',
          color: isCurrentPage ? 'white' : '#333',
          fontWeight: isCurrentPage ? '600' : '500',
          cursor: isCurrentPage ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '14px',
          opacity: isCurrentPage ? 1 : 0.8,
        }}
        onMouseOver={(e) => {
          if (!isCurrentPage) {
            e.target.style.background = '#f0f0f0'
            e.target.style.borderColor = '#667eea'
          }
        }}
        onMouseOut={(e) => {
          if (!isCurrentPage) {
            e.target.style.background = 'white'
            e.target.style.borderColor = '#ddd'
          }
        }}
      >
        {pageNumber}
      </button>
    )
  })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '30px 20px',
        flexWrap: 'wrap',
      }}
    >
      {pages}
    </div>
  )
}

export default Pagination
