// SearchInput.jsx

import { Input, Box } from '@chakra-ui/react'

function SearchInput({
  search,
  setSearch,
  handleKeyDown,
  setSelectedIndex
}) {

  return (
    <Box>

      <Input
        variant="unstyled"
        type="text"
        name="search"
        value={search}

        onChange={(e) => {
          setSearch(e.target.value)
          setSelectedIndex(-1)
        }}

        onKeyDown={handleKeyDown}

        placeholder="Search luxury products..."

        className="searchInput"
      />

    </Box>
  )
}

export default SearchInput