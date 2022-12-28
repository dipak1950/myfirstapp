import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function HeaderR() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/Features'>Features</NavLink>
                        <NavLink to='/Pricing'>Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderR;