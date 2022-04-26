import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { Store } from '../../Store';

const Header = () => {
  // here some logic
  //const history = useHistory();
  const { state } = useContext(Store);
  const { cart } = state;
  useEffect(() => {
  }, [])


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#/About">About</Nav.Link>
            <Nav.Link href="#Registration">Sign Up</Nav.Link>
            <Nav.Link href="#/Login" >
              Login
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.length}
                </Badge>
              )}
            </Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;
