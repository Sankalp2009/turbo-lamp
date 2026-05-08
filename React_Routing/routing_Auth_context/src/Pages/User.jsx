/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Box,
  Stack,
  Image,
  ButtonGroup,
  Heading,    
  Button,
  Text,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
} from "@chakra-ui/react"; 
import { StarRating } from "react-rating-star-component";

function getData(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data 
    });
}

const User = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    getData(`https://dummyjson.com/recipes?limit=${limit}&skip=${pages}`).then(
      (data) => {
        // console.log(data);
      setLimit(data?.limit),
        setTotalPages(data?.total),
          setRecipeData(data?.recipes);
      }
    );
  }, [pages, limit]);

  console.log(recipeData);

  return (    <>
      <h1>Recipes</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Link to="/">
          <Button>Go to home using navigate</Button>
        </Link>
        <Button onClick={() => navigate("/about")}>
          Go to about using navigate
        </Button>
      </div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        { recipeData && recipeData.map((elem) => {
            return (
              <Box key={elem.id}>
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src={elem.image}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{elem.name}</Heading>
                      <Text color="blue.600" fontSize="2xl">
                        <StarRating
                          totalStars={5} // Display 10 stars
                          initialRating={elem.rating} // Initial rating set to 3 stars
                          activeColor="orange" // Selected stars color
                          inactiveColor="lightgray" // Unselected stars color
                          size="2rem" // Size of the stars
                          gap="5px" // Gap between stars
                          tooltipTexts={[
                            "Poor",
                            "Fair",
                            "Good",
                            "Very Good",
                            "Excellent",
                          ]} // Custom tooltips
                          ariaLabel="Custom star rating" // Accessible label
                        />
                      </Text>
                    </Stack>
                  </CardBody>
 
                  <CardFooter>
                    <Link to={`/${elem.id}`}>
                      <ButtonGroup spacing="2">
                        <Button variant="ghost" colorScheme="blue">
                          More Details
                        </Button>
                      </ButtonGroup>
                    </Link>
                  </CardFooter>
                </Card>
              </Box>
            );
          })}
      </Grid>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Button disabled={pages === 1} onClick={() => setPages(pages - 1)}>
          Prev
        </Button>
        <Button>{pages}</Button>
        <Button
          disabled={pages === totalPages}
          onClick={() => setPages(pages + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export default User;