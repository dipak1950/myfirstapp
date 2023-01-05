import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Features() {

    const navigate = useNavigate();

    const click = () => {
        navigate("/view", { state: { msg: "Good ......." } });
    }

    const back = () => {
        navigate("/back")
    }

    return (
        <>
            <div>Features</div>

            <Button variant='primary' onClick={() => { click() }}>
                View
            </Button>
            <Button variant='primary' onClick={() => { back() }}>
                Back
            </Button>
        </>
    )
}

export default Features;