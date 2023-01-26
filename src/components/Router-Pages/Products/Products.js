import React, { useState } from 'react';
import { Container, Row, Card, Button, Form } from 'react-bootstrap';
import { Product } from '../../Constant/Product';
import { UniqData } from '../../Utility/UniqData'

function Products() {

    const [allproduct, setAllProduct] = useState(Product)
    const [searchpro, setSearchPro] = useState({
        search: ''
    })

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

    const HandleChange = (e) => {
        // console.log("HandleChange");
        const name = e.target.name
        const value = e.target.value

        setSearchPro({ [name]: value })

        const filterTitle = Product.filter((data) => {
            return data.title.toLowerCase().search(value) !== -1
        })
        setAllProduct(filterTitle);
    }

    return (
        <>
            <Container>
                <Row style={{ justifyContent: "center" }}>
                    <div className='col-9'>
                        <Button variant='primary' onClick={(() => filterList("all"))}>All</Button>
                        {
                            categories.map((category, index) => {
                                return (
                                    <Button variant='primary' onClick={(() => filterList(category))} style={{ textTransform: 'capitalize', margin: "10px" }} key={index} id={index}>
                                        {
                                            category
                                        }
                                    </Button>
                                )
                            })
                        }
                    </div>
                    <div className='col-3'>
                        <Form.Control placeholder="Search" name='search' value={searchpro.search} onChange={(e) => { HandleChange(e) }} />
                    </div>
                </Row>
            </Container>
            <Container>
                <Row style={{ justifyContent: "center", marginTop: "30px" }}>
                    {
                        allproduct.map((p, index) => {
                            // console.log(p, "l");
                            return (
                                <Card style={{ width: '17rem' }} key={index} id={index}>
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