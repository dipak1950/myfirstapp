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

    const sortData = (key, type) => {
        // console.log(key, 'key');
        const sortedData = [...allproduct].sort((proA, proB) => {
            if (type === "low") {
                return proA[key] - proB[key];
            }
            else if (type === "high") {
                return proB[key] - proA[key];
            }
            else if (type === "asc") {
                return proA[key].localeCompare(proB[key])
            }
            else if (type === "dsc") {
                return proB[key].localeCompare(proA[key])
            }
        });
        setAllProduct(sortedData)
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
                                    <Button variant='primary' onClick={(() => filterList(category))} style={{ textTransform: 'capitalize', margin: "7px" }} key={index} id={index}>
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
                <div className='col-12'>
                    <Button onClick={() => { sortData("price", "low") }} style={{ margin: "12px" }}>
                        Low Price
                    </Button>
                    <Button onClick={() => { sortData("price", "high") }} style={{ margin: "12px" }}>
                        High Price
                    </Button>
                    <Button onClick={() => { sortData("title", "asc") }} style={{ margin: "12px" }}>
                        A-Z
                    </Button>
                    <Button onClick={() => { sortData("title", "dsc") }} style={{ margin: "12px" }}>
                        Z-A
                    </Button>
                </div>
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
                                        <Card.Text>
                                            {
                                                p.price
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