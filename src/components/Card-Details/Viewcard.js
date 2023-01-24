import React from 'react'
import { Container, Row, Button, Card } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

function Viewcard() {

    const navigate = useNavigate();
    const location = useLocation();
    // console.log("location.state.data",location.state.data);
    const view = location.state.data;
    const Back = () => {
        navigate(-1);
    }

    return (
        <>
            <Container>
                <Row>
                    <div className=''>

                        <Card.Img variant="top" src={view.img} style={{ width: '30rem', height: '10rem' }} />
                        <Card.Body>
                            <Card.Title>{view.title}</Card.Title>
                            <Card.Text>
                                {
                                    view.detail
                                }
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <Button variant="primary" onClick={() => { Back() }}>Back</Button>
                </Row>
            </Container>
        </>
    )
}

export default Viewcard;