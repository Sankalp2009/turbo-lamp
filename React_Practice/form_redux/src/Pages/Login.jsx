
import React, {useState} from 'react'
import { Typography, Button, Flex,Tooltip, Checkbox, Form, Input } from "antd";
const { Title, Paragraph, Text } = Typography;
import {useDispatch} from "react-redux"
import {Action_Type} from '../Redux/Auth_Reducer/action.jsx'
import {useNavigate} from "react-router"
const InitialState = {
  name:"",
  email:"",
  password:"",
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};


function Login() {

  const [IsInput, setIsInput] = useState(InitialState)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const HandleChange = (e)=>{
    const {name, value} = e.target;
    setIsInput(Prev=>({
      ...Prev,
      [name]:value,
    }))
  }

  const HandleSubmit = async()=>{
    try {
      dispatch({
        type: Action_Type.LOGIN_REQUEST,
      })
      let URL = "https://reqres.in/api/login"
      let Response = await fetch(URL,{
        method: "POST",
        body: JSON.stringify({
          name:IsInput.name,
          email:IsInput.email,
          password:IsInput.password,
        }),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
      })
      let Result = await Response.json();
      console.log(Result.token);
      dispatch({
        type: Action_Type.LOGIN_SUCCESS,
        payload: {
          token:Result.token,
          name:IsInput.name
        },
      })
      navigate("/product");
    } catch (error) {
      console.log(error)
      dispatch({
        type: Action_Type.LOGIN_FAILURE,
      })
    }
  }

  return (
    <>
      <div className="form_Container">
        <Title>Sign in</Title>
        <Paragraph style={{width:"60%"}}>If you don't have an account Please <span style={{color:"blue"}}>Register</span></Paragraph>
         <Form
    name="basic"
    labelCol={{ span: 8 }}
    onFinish={HandleSubmit}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item>
      <Text>Enter name</Text>
      <Input type="text" placeholder="Enter name" name="name" value={IsInput.name} onChange={HandleChange} />
    </Form.Item>

    <Form.Item>
      <Text>Enter Email</Text>
      <Input type="text" placeholder="Enter email" name="email" value={IsInput.email} onChange={HandleChange} />
    </Form.Item>

    <Form.Item>
      <Text>Enter Email</Text>
      <Input type="text" placeholder="Enter password" name="password" value={IsInput.password} onChange={HandleChange} />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </div>
    </>
  )}

export default Login

// email: eve.holt@reqres.in
// pass:  cityslicka