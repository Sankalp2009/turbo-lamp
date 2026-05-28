import CartCard from './CartCard'
function CartPage({data}) {
  return (
    <div className='CartOuter'>
      {
        data.map(el=>
          <CartCard key={el.id} {...el} />
        )
      }
    </div>
  )
}

export default CartPage