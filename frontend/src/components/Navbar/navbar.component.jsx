import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const NavBar = () => {
  return (
    <Navbar
      className="nav-color"
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Navbar.Brand href="#home"> <Link className="link-color" to="/">Put-Logo</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link  
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link className="link-color">
            <Link className="link-color" to="/login"> Login </Link>
          </Nav.Link>   
          <Nav.Link>
            <Link className="link-color" to="/register"> Register </Link>
          </Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
