function Display({thumbnail, title, price}) {
  return (
    <div>
      <img src={thumbnail || '/placeholder.jpg'} alt="Product" />
              <h4>{title || 'Untitled'}</h4>
              <p>₹{price || 'N/A'}</p>
    </div>
  )
}

export default Display