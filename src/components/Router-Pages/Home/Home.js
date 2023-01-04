import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home(props) {

  const navigate = useNavigate();

  const click = () => {
    navigate("/view");
  }

  const back = () => {
    navigate("/back")
  }
  return (
    <>
      <div>Home</div>
      <Button path='/view' msg='hello' variant='primary' onClick={() => { click() }}>
        View
      </Button>
      <Button variant='primary' onClick={() => { back() }}>
        Back
      </Button>
    </>
  )
}

export default Home