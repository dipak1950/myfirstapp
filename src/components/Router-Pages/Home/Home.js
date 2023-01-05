import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {

  const list = ["dipak", "mitesh", "rudra", "sahil"];

  const navigate = useNavigate();

  const click = () => {
    navigate("/view", { state: { data: list } });
  }

  const back = () => {
    navigate("/back")
  }

  // console.log(props.msg);
  return (
    <>
      <div>Home</div>
      <Button variant='primary' onClick={() => { click() }}>
        View
      </Button>
      <Button variant='primary' onClick={() => { back() }}>
        Back
      </Button>
    </>
  )
}

export default Home