import React, { useState } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Product } from '../../Constant/Product';
import { UniqData } from '../../Utility/UniqData'

function Products() {

    const [allproduct, setAllProduct] = useState(Product)

    const categories = UniqData(Product, "category")
    // console.log(categories, "jjjj");

    const filterList = (category) => {
        const filterData = Product.filter((data) => {
            if (category === "all") {
                return Product
            }
            return data.category === category
        })
        setAllProduct(filterData)
    }

    return (
        <>
            <Container>
                <Button variant='primary' onClick={(() => filterList("all"))}>All</Button>
                {
                    categories.map((category) => {
                        return (
                            <Button variant='primary' onClick={(() => filterList(category))} style={{ textTransform: 'capitalize' }}>
                                {
                                    category
                                }
                            </Button>
                        )
                    })
                }
            </Container>
            <Container>
                <Row style={{ justifyContent: "center" }}>
                    {
                        allproduct.map((p) => {
                            // console.log(p, "l");
                            return (
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={p.thumbnail} style={{ height: '10rem' }} />
                                    <Card.Body>
                                        <Card.Title>{p.title}</Card.Title>
                                        <Card.Text>
                                            {
                                                p.description
                                            }
                                        </Card.Text>
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

export default Products;