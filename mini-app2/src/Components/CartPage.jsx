import CartCard from './CartCard'
function CartPage({data}) {

  const total = data.reduce(
    (accumulator, el) => accumulator + Math.floor(el.price),
    0,
  );

  console.log(total);

  return (
    <div className='CartOuter'>
      <div>
        <h2>{`Total Price: ${total || 0}`}</h2>
      </div>
      <div>
      {
        data.map(el=>
          <CartCard key={el.id}  product={el} />
        )
      }
      </div>
    </div>
  )
}

export default CartPage