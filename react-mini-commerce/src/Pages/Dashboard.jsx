import { useEffect, useContext, useState } from 'react'
import { Action_Type } from '../Utils/ActionCreators'
import axios from 'axios'

import { DataContext } from '../Context/DataContext'

import ProductData from '../Components/ProductData'
import FilterSort from '../Components/FilterSort'

import { useSearchParams } from "react-router-dom"

function Dashboard() {

  const { state, dispatch } = useContext(DataContext)

  const [FilteredData, setFilteredData] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()
   
  const categories = [
  ...new Set(
    state.data.map((item) => item.category)
  )
]
  // FILTER HANDLER

  const HandleFilter = (category) => {
    setFilteredData(category)
  }

  useEffect(() => {

    const fetchData = async () => {

      try {

        dispatch({
          type: Action_Type.GET_REQUEST,
        })

        // BASE URL

        let url = `http://localhost:3000/Products`

        // FILTER QUERY

        if (FilteredData) {
          url += `?category=${FilteredData}`
        }

        const Res = await axios.get(url)

        const data = Res?.data || []

        dispatch({
          type: Action_Type.GET_SUCCESS,
          payload: data,
        })

      } catch (error) {

        console.log('err', error)

        dispatch({
          type: Action_Type.GET_FAILURE,
        })
      }
    }

    fetchData()

    // URL PARAMS

    if (FilteredData) {

      setSearchParams({
        category: FilteredData,
      })

    } else {

      setSearchParams({})
    }

  }, [FilteredData, dispatch, setSearchParams])

  if (state.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>

      {
        !state.isLoading &&
        state.data.length === 0 &&
        <h1>No Results Found</h1>
      }

      <FilterSort
  categories={categories}
  HandleFilter={HandleFilter}
/>

      <div className='Outer'>
        <ProductData data={state.data} />
      </div>

    </>
  )
}

export default Dashboard