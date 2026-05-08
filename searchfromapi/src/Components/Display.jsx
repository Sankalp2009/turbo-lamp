<<<<<<< HEAD
function Display({thumbnail, title, price}) {
  return (
    <div>
      <img src={thumbnail || '/placeholder.jpg'} alt="Product" />
              <h4>{title || 'Untitled'}</h4>
              <p>₹{price || 'N/A'}</p>
    </div>
=======
import React from 'react'

function Display() {
  return (
    <div>Display</div>
>>>>>>> be3b245218aff0bb399577d1ce6a9373fa5cf049
  )
}

export default Display