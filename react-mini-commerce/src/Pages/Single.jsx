import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Single() {
  const [Product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let Res = await axios.get(`http://localhost:3000/Products/${id}`)
        if (!Res.statusText) throw new Error('API Error')
        const data = Res?.data || {}
        if (data) {
          setProduct(data)
        }
      } catch (error) {
        console.log('err', error)
      }
    }

    fetchData()
  }, [id])

  return (
    <div
      style={{
        border: '1px solid red',
        width: '300px',
        margin: 'auto',
        padding: '15px',
        fontWeight: '600',
        textAlign:"center"
      }}
    >
      <img src={Product.thumbnail} alt={Product.title} />
      <h2>{Product.title}</h2>
      <p
        style={{
          padding: '15px',
          color: '#27ae60',
          fontWeight: '600',
        }}
      >
        Price:{Product.price}
      </p>
    </div>
  )
}

export default Single
