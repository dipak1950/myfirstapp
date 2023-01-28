import { Button } from 'react-bootstrap';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function View() {

  const navigate = useNavigate();
  const location = useLocation();

  const back = () => {
    navigate(-1)
  }

  return (
    <>
      <div>View</div>
      <h1>
        {
          location.state.data
        }
      </h1>
      <p>
        {
          location.state.msg
        }
      </p>
      <Button variant='primary' onClick={() => { back() }}>
        Back
      </Button>
    </>

  )
}

export default View;