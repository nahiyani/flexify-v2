import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faYoutube, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  
  const { t } = useTranslation();
  
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleClose = () => {
    setShow(false);
    setEmail('');
    setIsValidEmail(true);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      handleShow();
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-between">
          <Col md={3} className="footer-section social-media-section">
            <h5>SOCIAL MEDIA</h5>
            <div className="social-icons">
              <Row>
                <Col xs={4}><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></Col>
                <Col xs={4}><a href="https://x.com/home"><FontAwesomeIcon icon={faTwitter} /></a></Col>
                <Col xs={4}><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a></Col>
              </Row>
              <Row>
                <Col xs={4}><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></Col>
                <Col xs={4}><a href="https://www.tiktok.com/"><FontAwesomeIcon icon={faTiktok} /></a></Col>
                <Col xs={4}><a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedinIn} /></a></Col>
              </Row>
            </div>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Quick Links</h5>
            <Row>
              <Col>
                <ul className="list-unstyled">
                  <li><Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/classes" className="nav-link-custom">Classes</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/instructors" className="nav-link-custom">Instructors</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/" className="nav-link-custom">Testimonials</Nav.Link></li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled">
                  <li><Nav.Link as={Link} to="/library" className="nav-link-custom">Library</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/reserve" className="nav-link-custom">Reserve</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/" className="nav-link-custom">Careers</Nav.Link></li>
                  <li><Link to="/faq" className="nav-link-custom">FAQ</Link></li>
                  <li><Nav.Link as={Link} to="/" className="nav-link-custom">Privacy Policy</Nav.Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="footer-section last-column">
            <h5>Questions?</h5>
            <p>
              Email: info@tutorease.com<br />
              Phone: 613-440-5350<br />
              Hours: 8AM - 10PM, 7 days a week
            </p>
          </Col>
        </Row>
        <Row className="subscribe-section justify-content-center">
          <Col md={12} className="text-center footer-section">
            <h2 className="subscribe-title">Subscribe to our monthly newsletter!</h2>
            <Form className="subscribe-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="email-input-group">
                <Form.Control 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidEmail(true);
                  }} 
                  isInvalid={!isValidEmail}
                  style={{ width: '100%' }}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" className="footer-button">SEND</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2024 Flexify Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: 'green', color: 'white' }}>
          <Modal.Title>Subscription Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for subscribing! A confirmation email has been sent to {email}.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;