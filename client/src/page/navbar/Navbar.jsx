import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap'
import { Store } from '../../Store';
import { CartFill, BagHeartFill } from 'react-bootstrap-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };
  if (userInfo && userInfo.isAdmin)
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#/contactus">Contact Us</Nav.Link>
              <Nav.Link href="#/About">About</Nav.Link>
              <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
                <CartFill />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
                <BagHeartFill />
              </Link>
              <NavDropdown title={userInfo.firstName} id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/profile" className="nav-link">User Profile</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/orderhistory" className="nav-link">Order History</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/" onClick={signoutHandler}>Sign Out</Link>
              </NavDropdown>
              <NavDropdown title="Admin" id="admin-nav-dropdown">
                <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar >
    )

  else if (userInfo)
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#/contactus">Contact Us</Nav.Link>
              <Nav.Link href="#/About">About</Nav.Link>
              <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
                <CartFill />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
                <BagHeartFill />
              </Link>
              <NavDropdown title={userInfo.firstName} id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/profile" className="nav-link">User Profile</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/orderhistory" className="nav-link">Order History</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/" onClick={signoutHandler}>Sign Out</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  else
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#/contactus">Contact Us</Nav.Link>
              <Nav.Link href="#/About">About</Nav.Link>
              <Nav.Link href="#/signup">Sign Up</Nav.Link>
              <Nav.Link href="#/signin" >Login</Nav.Link>
              {/* <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
                <CartFill />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              <Link to="/cart" className="nav-link fa-solid fa-cart-shopping">
                <BagHeartFill />
              </Link> */}
              {/* {userInfo ? (
                <NavDropdown title={userInfo.firstName} id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/profile" className="nav-link">User Profile</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/orderhistory" className="nav-link">Order History</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              )} */}
              {/* {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/admin/dashboard" className="nav-link">User Profile</Link></NavDropdown.Item>

                </NavDropdown>
              )} */}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar >
    );
}

export default Header;
