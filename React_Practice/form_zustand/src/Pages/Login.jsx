import React from "react";
import GlobalInfo from "../Zustand_store/AuthStore.jsx";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

const InitialState = {
  name: "",
  email: "",
  password: "",
};

import {useNavigate} from "react-router";

// const { login_request, login_success, login_fail } = GlobalInfo.getState();

function Login() {

  const request = GlobalInfo(state=>state.login_request);
  const success = GlobalInfo(state=>state.login_success);
  const fail = GlobalInfo(state=>state.login_fail);
  
  const Nav = useNavigate();

  const [IsInput, setIsInput] = React.useState(InitialState);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setIsInput((Prev) => ({
      ...Prev,
      [name]: value,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
     request();
      let URL = "https://reqres.in/api/login";
      let Response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          name: IsInput.name,
          email: IsInput.email,
          password: IsInput.password,
        }),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });
      let Result = await Response.json();
      console.log(Result.token,IsInput.name);
      Nav("/product")
     success(Result.token,IsInput.name);
    } catch (error) {
      console.log(error);
     fail();
    }
  };

  return (
    <div>
      <Box className="form_Container" p={5}>
        <Text fontSize="3xl">Sign in</Text>
        <Text style={{ width: "80%" }}>
          If you don't have an account Please{" "}
          <span style={{ color: "blue" }}>Register</span>
        </Text>

        <Box>
          <form onSubmit={HandleSubmit}>
            <FormControl mt={2}>
              <FormLabel>
                {" "}
                Name
                <Input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={IsInput.name}
                  onChange={HandleChange}
                />
              </FormLabel>

              <FormLabel>
                Enter Email
                <Input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={IsInput.email}
                  onChange={HandleChange}
                />
              </FormLabel>

              <FormLabel>
                {" "}
                Enter Password
                <Input
                  type="text"
                  placeholder="Enter password"
                  name="password"
                  value={IsInput.password}
                  onChange={HandleChange}
                />
              </FormLabel>

              <FormLabel>
                <Button type="submit" colorScheme="teal" mt={3} value="submit">
                  Submit
                </Button>
              </FormLabel>
            </FormControl>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Login;

// email: eve.holt@reqres.in
// pass:  cityslicka