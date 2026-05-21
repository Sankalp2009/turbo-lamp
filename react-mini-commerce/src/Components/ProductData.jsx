import ProductCard from './ProductCard'
function ProductData({ data }) {
  return (
    <div>
      <div className="container">
        {data?.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  )
}

export default ProductData