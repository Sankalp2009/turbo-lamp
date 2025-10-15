// Pages/Dashboard.jsx
import React from 'react'
import useSWR from 'swr'
import { Button, Text, Box, Center, Flex,Spinner,Grid, GridItem, Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Divider,ButtonGroup } from '@chakra-ui/react'
// import useAuthStore from "../Zustand_store/AuthStore.jsx"
// import { useNavigate } from 'react-router'
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Dashboard() {
  
   const { data, error, isLoading } = useSWR(`https://dummyjson.com/recipes`, fetcher)
   console.log(data);
   
   if(error) return <Box>Something's Wrong</Box>
   if(isLoading) return <Box><Center><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Center>
    
   </Box>

  return (
    <>
     <Box w="70%" h="auto" m="auto">
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {
          data && data?.recipes && data?.recipes?.map((el)=>(
            <Box key={el.id}>
              <GridItem>
                  <Card maxW='sm'>
  <CardBody>
    <Image
      src={el.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="200px"
      h="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{el.name}</Heading>
      <Text color='blue.600' fontSize='2xl'>
        serving: {el.servings}
      </Text>
      <Flex gap="2" >
        <Text fontSize="2xl">Tag:</Text>
        <Flex gap="3">
         {
          el.tags.map(item=>(
            <Text color='blue.600' fontSize='2xl'>{item}</Text>
          ))
        }
        </Flex>
      </Flex>
    </Stack>
  </CardBody>
  <Divider />
</Card>
              </GridItem>
            </Box>
          ))
        }
      </Grid>
     </Box>
    </>
  )
}

export default Dashboard