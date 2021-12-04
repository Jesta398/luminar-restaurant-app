import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'

function Navigations() {
    return (
        <div>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#menu">Menu</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#items">items</Nav.Link>
      <Nav.Link href="#cusine">Cusine</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
        </div>
    )
}

export default Navigations
