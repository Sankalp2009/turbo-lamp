import { useState, useEffect } from 'react'
import SearchInput from './SearchInput'
import { Spinner, Box } from '@chakra-ui/react'
function Search() {
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) =>
        prev < searchData.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && searchData[selectedIndex]) {
        setSearch(searchData[selectedIndex].title)
        setSearchData([])
      }
    }
  }

  useEffect(() => {
    // Fetch Part
    const FetchSearch = async () => {
      try {
        setIsLoading(true)
        const query = encodeURIComponent(search.trim());
        let Res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        )
        let data = await Res.json()
        console.log(data?.products)
        setSearchData(data?.products || [])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    // Debounce Optimization Part
    const timerID = setTimeout(() => {
      if (search.trim()) {
        FetchSearch()
      } else {
        setSearchData([])
      }
    }, 500)

    return () => clearTimeout(timerID)
  }, [search])

  return (
    <div>
      <SearchInput
        search={search}
        setSearch={setSearch}
        handleKeyDown={handleKeyDown}
      />
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
      )}

      {!isLoading && search && searchData.length === 0 && (
        <Box p={2}>No products found</Box>
      )}
      {searchData.length > 0 && (
        <Box border="1px solid gray">
          {searchData.map((item, index) => (
            <Box
              key={item.id}
              bg={selectedIndex === index ? 'gray.200' : 'white'}
              p={2}
            >
              {item.title}
            </Box>
          ))}
        </Box>
      )}
    </div>
  )
}

export default Search