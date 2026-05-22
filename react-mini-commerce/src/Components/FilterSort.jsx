import { useState } from 'react'

function FilterSort({
  categories,
  HandleFilter
}) {

  const [filter, setFilter] = useState('')

  const HandleFilterChange = (e) => {

    const { value } = e.target

    setFilter(value)

    HandleFilter(value)
  }

  return (
    <div>

      <h3>Filter</h3>

      <select
        value={filter}
        onChange={HandleFilterChange}
      >

        <option value="">
          All Categories
        </option>

        {
          categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))
        }

      </select>

    </div>
  )
}

export default FilterSort