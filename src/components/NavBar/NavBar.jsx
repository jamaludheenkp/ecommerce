import React from 'react'
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand className='text-white fw-bold' as={Link} to={"/"} >Rj Shopee 🛒</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white mx-3' as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link className='text-white mx-3' as={Link} to={"/products"} >Products</Nav.Link>
            <Nav.Link className='text-white mx-3' as={Link} to={"/basket"} >My Basket</Nav.Link>
            <Nav.Link className='text-white mx-3' as={Link} to={"/orders"} >Orders</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            ></Form.Control>
            <Button variant="outline-success bg-white" >🔍</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar