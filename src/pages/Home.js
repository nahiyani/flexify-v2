import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="fitness-studio">
        <section className="hero-section text-center">
          <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginTop: '50px' }} className='main-header'>
            YOUR PERSONAL VIRTUAL FITNESS STUDIO - ALL IN ONE PLACE!
          </h1>
          <p>
            Welcome to Flexify, where fitness meets convenience! Whether you're a seasoned athlete or just
            starting your fitness journey, our virtual studio offers a diverse range of classes to fit your
            schedule and your goals. From energizing yoga sessions to high-intensity interval training (HIIT)
            and everything in between, our expert instructors are here to guide you every step of the way.
          </p>
          <p>
            Join our community and transform your living room into a personal gym with live classes, on-demand
            workouts, and a wealth of resources to keep you motivated and informed.
          </p>
          <Link to="/library" className="nav-link-custom">
            <Button className='purple-button'>
              EXPLORE OUR COLLECTION
            </Button>
          </Link>
        </section>

        <section className="featured-classes text-center">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '50px' }}>FEATURED CLASSES</h2>
          <Container>
            <Row>
              <Col md={4}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title>Class #1</Card.Title>
                    <Card.Text>
                      Shortened Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title>Class #2</Card.Title>
                    <Card.Text>
                      Shortened Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title>Class #3</Card.Title>
                    <Card.Text>
                      Shortened Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Link to="/classes" className="nav-link-custom">
              <Button className="mt-3 white-button" style={{ width: '250px' }}>
                EXPLORE ALL
              </Button>
            </Link>
          </Container>
        </section>

        <section className="instructors-section text-center">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '50px' }}>INSTRUCTORS</h2>
          <Container>
            <Row>
              <Col md={3}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: '#8E46C6' }}>Name</Card.Title>
                    <Card.Text>
                      <span className="specialty">Specialty #1</span><br />
                      <span className="specialty">Specialty #2</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: '#8E46C6' }}>Name</Card.Title>
                    <Card.Text>
                      <span className="specialty">Specialty #1</span><br />
                      <span className="specialty">Specialty #2</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: '#8E46C6' }}>Name</Card.Title>
                    <Card.Text>
                      <span className="specialty">Specialty #1</span><br />
                      <span className="specialty">Specialty #2</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <div className="placeholder-image"></div>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: '#8E46C6' }}>Name</Card.Title>
                    <Card.Text>
                      <span className="specialty">Specialty #1</span><br />
                      <span className="specialty">Specialty #2</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Link to="/instructors" className="nav-link-custom">
              <Button className="mt-3 purple-button" style={{ width: '250px' }}>
                MEET THEM ALL
              </Button>
            </Link>
          </Container>
        </section>

        <section className="testimony-section text-center">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '50px' }}>TESTIMONY</h2>
          <Container>
            <Row>
              <Col md={2}>
                <div className="testimonial-picture"></div>
              </Col>
              <Col md={10}>
                <blockquote className="blockquote">
                  <p id='testimony-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <footer className="blockquote-footer">JOHN DOE, Parent</footer>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;