
import React from 'react'
import { Button, Result } from 'antd';
import {useNavigate} from 'react-router'
function Home() {

  const navigation = useNavigate()

  return (
    <div>
       <Result
    status="success"
    title="Home"
    extra={[
      <Button onClick={()=>navigation('/login')} type="primary" key="console">
        Go Login
      </Button>,
    ]}
  />
    </div>
  )
}

export default Home