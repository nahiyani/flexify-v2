import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

// Assuming your logo image is in the src/assets directory
import logoImage from '../images/flexifylogo.png'; // Replace with your actual image path

const Header = () => {
  return (
    <Navbar className="main-nav navbar navbar-expand-lg" expand="lg">
      <Container fluid>
        {/* Replace text with an image */}
        <Navbar.Brand as={Link} to="/" className="brand">
          <img
            src={logoImage} // Path to your logo image
            width="auto"
            height="30"
            className="d-inline-block align-top logo-image"
            alt="Flexify Logo" // Alt text for accessibility
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto nav-list">
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/classes" className="nav-link-custom">Classes</Nav.Link>
            <Nav.Link as={Link} to="/instructors" className="nav-link-custom">Instructors</Nav.Link>
            <Nav.Link as={Link} to="/library" className="nav-link-custom">Library</Nav.Link>
            <Nav.Link as={Link} to="/reserve" className="nav-link-custom">Reserve</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
