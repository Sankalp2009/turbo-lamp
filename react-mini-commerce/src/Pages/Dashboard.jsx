import { useEffect, useContext } from 'react'
import { Action_Type } from '../Utils/ActionCreators'
import axios from 'axios'
import { DataContext } from '../Context/DataContext'
import ProductData from '../Components/ProductData'

function Dashboard() {
  const {state, dispatch } = useContext(DataContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: Action_Type.GET_REQUEST,
        })
        let Res = await axios.get('http://localhost:3000/Products')
        if (!Res.statusText) throw new Error('API Error')
        const data = Res?.data || []
        if (data) {
          dispatch({
            type: Action_Type.GET_SUCCESS,
            payload: data || [],
          })
        }
      } catch (error) {
        console.log('err', error)
        dispatch({
          type: Action_Type.GET_FAILURE,
        })
      }
    }

    fetchData()
  }, [])
  
  if(state.isLoading) return <div>Loading</div>

  return (
    <>
    {!state.isLoading && state.data.length === 0 && <h1>No Results Found</h1>}
    <div className='Outer'>
      {
      <ProductData data={state.data} />
      }
    </div>
    </>
  )
}

export default Dashboard