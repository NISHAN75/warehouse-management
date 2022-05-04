import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import './Header.css'
import {signOut } from 'firebase/auth';

const Header = () => {
  const [auth] =useAuth();
  const [user] =useAuthState(auth);
  const logOut =() =>{
    signOut(auth);
  }
  return (
    <div className="header-area">
      <Navbar className="shadow-lg" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Amorini Furniture</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/AddItems">AddItems</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/about">About</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/store">Store</Nav.Link>
              {
                user? <button className="l-btn" onClick={logOut}>Logout</button> : <Nav.Link className="nav-item" as={Link} to="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
