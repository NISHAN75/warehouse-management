import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import './Header.css'
import {signOut } from 'firebase/auth';
import { useSpring ,animated } from "react-spring";

const Header = () => {
  const [auth] =useAuth();
  const [user] =useAuthState(auth);
  const logOut =() =>{
    signOut(auth);
  }
  const fade=useSpring({
   from: {
      opacity: 0
   },
   to : {
     opacity: 1
   }
  });
  return (

    <animated.div className="header-area" style={fade}>
      <Navbar className="shadow-lg" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Amorini Furniture</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item active" as={Link} to="/home">Home</Nav.Link>
              {
                user? <Nav.Link className="nav-item" as={Link} to="/addItems">Add Item</Nav.Link>:''
              }
              {
                user? <Nav.Link className="nav-item" as={Link} to="/manage">Manage Items</Nav.Link>:''
              }
              {
                user? <Nav.Link className="nav-item" as={Link} to="/myItems">My items</Nav.Link>: ''
              }
              <Nav.Link className="nav-item" as={Link} to="/blog">Blog</Nav.Link>
              {
                user? <button className="logOut-btn" onClick={logOut}>Logout</button> : <Nav.Link className="nav-item" as={Link} to="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </animated.div>
  );
};

export default Header;
