import React from 'react'
import {Link} from "react-router-dom"
import {Navbar,Container,Nav,Badge} from "react-bootstrap"
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";



import "./Navbar.css"
const NavbarSection = () => {
    const cartItems=JSON.parse(localStorage.getItem("CartItems"))
    const favItems=JSON.parse(localStorage.getItem("FavItems"))
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:"600"}} href="/">Gajala-Collections</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Nav
  className="custom-nav me-auto my-2 my-lg-0"
  style={{ maxHeight: '100px' }}
  navbarScroll
>
  <Link to="/products" className="nav-link-custom">Products</Link>
  <Link to="/FavSection" className="nav-link-custom"><FaHeart/>  <Badge bg="secondary">{favItems.length}</Badge></Link>
  <Link to="/Cart" className="nav-link-custom"><TiShoppingCart/> <Badge bg="secondary">{cartItems.length}</Badge></Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarSection
