/* eslint-disable react-hooks/set-state-in-effect */
// Search.jsx
import { useState, useEffect } from 'react'
import SearchInput from './SearchInput'
import { Spinner, Box, Flex, Text } from '@chakra-ui/react'

function Search() {
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [cache, setCache] = useState({})
  
  
  const handleKeyDown = (e) => {

    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) =>
        prev < searchData.length - 1 ? prev + 1 : prev
      )
    }

    else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : prev
      )
    }

    else if (e.key === 'Enter') {

      if (selectedIndex >= 0 && searchData[selectedIndex]) {
        setSearch(searchData[selectedIndex].title)
        setSearchData([])
      }
    }
  }

  // useEffect(() => {

  //   const fetchSearch = async () => {

  //     const trimmedSearch = search.trim()

  //     if (!trimmedSearch) {
  //       setSearchData([])
  //       return
  //     }

  //     // Cache Check
  //     if (cache[trimmedSearch]) {
  //       setSearchData(cache[trimmedSearch])
  //       return
  //     }

  //     try {

  //       setIsLoading(true)

  //       const query = encodeURIComponent(trimmedSearch)

  //       const res = await fetch(
  //         `https://dummyjson.com/products/search?q=${query}`
  //       )

  //       const data = await res.json()

  //       setSearchData(data?.products || [])

  //       // Save to cache
  //       setCache((prev) => ({
  //         ...prev,
  //         [trimmedSearch]: data?.products || []
  //       }))

  //     } catch (error) {
  //       console.log(error)
  //       setSearchData([])
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   // Debounce
  //   const timerID = setTimeout(() => {
  //     fetchSearch()
  //   }, 500)

  //   return () => clearTimeout(timerID)

  // }, [search, cache])
  
  useEffect(() => {

    const trimmedSearch = search.trim();
  
    // Reset state if input cleared
    if (!trimmedSearch) {
      setSearchData([]);
      setIsLoading(false);
      setSelectedIndex(-1);
      return;
    }
  
    const controller = new AbortController();
  
    // Capture current search
    const currentQuery = trimmedSearch;
  
    const fetchSearch = async () => {
  
      // Cache Check
      if (cache[currentQuery]) {
        setSearchData(cache[currentQuery]);
        return;
      }
  
      try {
  
        setIsLoading(true);
  
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(currentQuery)}`,
          {
            signal: controller.signal
          }
        );
  
        const data = await res.json();
  
        // Prevent stale updates
        if (currentQuery !== search.trim()) {
          return;
        }
  
        const products = data?.products || [];
  
        setSearchData(products);
  
        // Save to cache
        setCache(prev => ({
          ...prev,
          [currentQuery]: products
        }));
  
      } catch (error) {
  
        // Ignore abort errors
        if (error.name !== "AbortError") {
          console.log(error);
        }
  
      } finally {
  
        // Prevent stale loading updates
        if (currentQuery === search.trim()) {
          setIsLoading(false);
        }
      }
    };
  
    // Debounce
    const timerID = setTimeout(() => {
      fetchSearch();
    }, 300);
  
    return () => {  
      clearTimeout(timerID);
      controller.abort();
    };
  
  }, [search, cache]);

  return (
    <div className="searchWrapper">

      <SearchInput
        search={search}
        setSearch={setSearch}
        handleKeyDown={handleKeyDown}
        setSelectedIndex={setSelectedIndex}
      />

      {isLoading && (
        <Box className="loaderContainer">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.400"
            size="lg"
          />
        </Box>
      )}

      {!isLoading && search && searchData.length === 0 && (
        <Box className="emptyState">
          No products found
        </Box>
      )}

      {searchData.length > 0 && (
        <Box className="dropdownContainer">

          {searchData.map((item, index) => (

            <Flex
              key={item.id}
              className="cartContainer"
              bg={
                selectedIndex === index
                  ? 'rgba(255,255,255,0.15)'
                  : 'transparent'
              }
              onClick={() => {
                setSearch(item.title)
                setSearchData([])
              }}
            >

              <Box className="cartImage">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Box>

              <Box className="cartContent">

                <Text className="productTitle">
                  {item.title}
                </Text>

                <Text className="productPrice">
                  ${item.price}
                </Text>

              </Box>

            </Flex>
          ))}

        </Box>
      )}
    </div>
  )
}

export default Search