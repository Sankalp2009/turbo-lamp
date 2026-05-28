import { useContext } from 'react'
import { GlobalCart } from '../Context/CartContext'
import CartPage from '../Components/CartPage'
function Cart() {
  const {CartState } = useContext(GlobalCart);
  return (
    <div>
      <CartPage data={CartState?.Cart_Data} />
    </div>
  )
}

export default Cart