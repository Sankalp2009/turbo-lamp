function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          data-testid="page-btn"
          disabled={currentPage === i + 1}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </>
  )
}

export default Pagination
