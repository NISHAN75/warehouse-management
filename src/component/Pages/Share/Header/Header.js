import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header-area">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Amorini Furniture</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="underline" as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className="underline" as={Link} to="/items">Items</Nav.Link>
              <Nav.Link className="underline" as={Link} to="/about">About</Nav.Link>
              <Nav.Link className="underline" as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link className="underline" as={Link} to="/store">Store</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
