import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function CardView() {

    const details = [{
        img: "./images/shoes.jpg",
        title: 'Shoes',
        detail: ' Some quick example text to build on the card title and make up thebulk of the cardzs content'
    }, {
        img: "./images/iphone.jpg",
        title: 'Iphone',
        detail: ' Some quick example text to build on the card title and make up thebulk of the cardzs content'
    }, {
        img: "./images/watch.jpg",
        title: 'Watch',
        detail: ' Some quick example text to build on the card title and make up thebulk of the cardzs content'
    }, {
        img: "./images/leptop.jpg",
        title: 'Leptop',
        detail: ' Some quick example text to build on the card title and make up thebulk of the cardzs content'
    }];


    const navigate = useNavigate();

    const view = (data) => {
        navigate('/ViewCard', { state: { data: data } });
    }

    return (
        <>
            <Container>
                <h1 style={{ textAlign: 'center', padding: '5px' }}>CardView</h1>
                <Row style={{ justifyContent: 'center' }}>
                    {
                        details.map((v, index) => {
                            return (
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={v.img} style={{ height: '10rem' }} />
                                    <Card.Body>
                                        <Card.Title>{v.title}</Card.Title>
                                        <Card.Text>
                                            {
                                                v.detail
                                            }
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { view(v) }}>View</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default CardView;

