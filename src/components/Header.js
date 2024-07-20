import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useTranslation } from 'react-i18next';

import logoImage from '../images/flexifylogo.png'; // Replace with your actual image path

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar className="main-nav navbar navbar-expand-lg" expand="lg" role="navigation" aria-label="Main navigation">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand">
          <img
            src={logoImage}
            width="auto"
            height="30"
            className="d-inline-block align-top logo-image"
            alt="Flexify Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto nav-list" role="menubar">
            <Nav.Link as={Link} to="/about" className="nav-link-custom" role="menuitem">About Us</Nav.Link>
            <Nav.Link as={Link} to="/classes" className="nav-link-custom" role="menuitem">Classes</Nav.Link>
            <Nav.Link as={Link} to="/instructors" className="nav-link-custom" role="menuitem">Instructors</Nav.Link>
            <Nav.Link as={Link} to="/library" className="nav-link-custom" role="menuitem">Library</Nav.Link>
            <Nav.Link as={Link} to="/reserve" className="nav-link-custom" role="menuitem">Reserve</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
