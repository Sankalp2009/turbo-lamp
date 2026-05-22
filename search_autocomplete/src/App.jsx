import Search from './Components/Search'
import { Text, Box } from '@chakra-ui/react'
import './App.css'
function App() {

  return (
    <Box w='100%' h='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap='50px'>
    <Text fontSize='5xl' fontWeight='bold' color='blue.500'>Implementing Search Autocomplete</Text>
      <Search />
    </Box>
  )
}

export default App
