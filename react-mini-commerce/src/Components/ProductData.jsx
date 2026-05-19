import ProductCard from './ProductCard'
function ProductData({ data }) {
  return (
    <div>
      <div className="container">
        {data?.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductData
