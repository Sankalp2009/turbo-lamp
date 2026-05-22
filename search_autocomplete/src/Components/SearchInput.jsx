import { Input, Box } from '@chakra-ui/react'
function SearchInput({search, setSearch, handleKeyDown}) {
  return (
    <Box p={4}>
      <Input
      variant='outline' 
      type='text'
      name="search"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder='Search Products' 
      size='lg'
      />
    </Box>
  )
}

export default SearchInput