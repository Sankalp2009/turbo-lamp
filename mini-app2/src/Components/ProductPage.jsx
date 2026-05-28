import ProductCard from './ProductCard'
function ProductPage({data}) {
  console.log(data?.products);
  return (
    <div className="products-wrapper">
      <div className="products-grid">
        {data?.products?.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage