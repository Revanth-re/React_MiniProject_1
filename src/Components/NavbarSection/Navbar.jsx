import React from 'react'
import {Link} from "react-router-dom"
import {Navbar,Container,Nav} from "react-bootstrap"
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";


import "./Navbar.css"
const NavbarSection = () => {
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
  <Link to="/FavSection" className="nav-link-custom"><FaHeart></FaHeart></Link>
  <Link to="/Cart" className="nav-link-custom"><TiShoppingCart/></Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarSection
