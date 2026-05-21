import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartPage from '../Components/CartPage'
function Cart() {
  const { CartState } = useContext(CartContext)
  console.log(CartState?.cart);
  return (
    <div className='CartOuter'>
      {
        CartState?.cart && CartState?.cart.map(el=>(
          <CartPage key={el.id} {...el} />
        ))
      }
    </div>
  )
}

export default Cart