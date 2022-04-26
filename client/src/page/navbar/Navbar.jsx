import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  // here some logic
  //const history = useHistory();
  const [userEmail, setUserEmail] = useState("");

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
          
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;
