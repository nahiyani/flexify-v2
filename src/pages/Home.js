import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Home.css';
import { Helmet } from 'react-helmet';

import CardioBlast from '../images/classes/cardioblast.webp';
import StrengthMastery from '../images/classes/strengthmastery.webp';
import YogaRelaxation from '../images/classes/yogarelaxation.webp';

import arnold from '../images/arnold.png';
import dwayneJohnson from '../images/dwaynejohnson.webp';
import ericWinter from '../images/ericwinter.webp';
import scarlettJohansson from '../images/scarlettjohansson.webp';
import alyssaRodriguez from '../images/alyssarodriguez.jpg';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Flexify</title>
        <meta name="description" content="This is a detailed description of the page." />
      </Helmet>
      <Header />
      <div className="fitness-studio">
        <section className="hero-section text-center">
          <div className="hero-content">
            <div className='text-stuff'>
              <h1 className='main-header'>
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
            </div>
            <Link to="/library" className="nav-link-custom">
              <Button className='purple-button header-button'>
                EXPLORE OUR COLLECTION
              </Button>
            </Link>
          </div>
        </section>

        <section className="featured-classes text-center">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '25px' }}>FEATURED CLASSES</h2>
          <Container>
            <Row>
              <Col md={4}>
                <Card className="featured-class-card">
                  <div className="placeholder-image">
                    <img src={CardioBlast} alt="Cardio Blast" className="featured-class-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className='featured-classes-title'>Cardio Blast</Card.Title>
                    <Card.Text>
                      An energetic cardio class to get your heart pumping!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="featured-class-card">
                  <div className="placeholder-image">
                    <img src={StrengthMastery} alt="Strength Mastery" className="featured-class-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className='featured-classes-title'>Strength Mastery</Card.Title>
                    <Card.Text>
                      Build your strength with this comprehensive workout.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="featured-class-card">
                  <div className="placeholder-image">
                    <img src={YogaRelaxation} alt="Yoga Relaxation" className="featured-class-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className='featured-classes-title'>Yoga Relaxation</Card.Title>
                    <Card.Text>
                      Relax and unwind with this gentle and serene yoga class.
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
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', marginTop: '30px', marginBottom: '20px' }}>INSTRUCTORS</h2>
          <Container>
            <Row>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={arnold} alt="Arnold Schwarzenegger" className="instructor-image" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: 'white' }}>Arnold Schwarzenegger</Card.Title>
                    <Card.Text>
                      <span className="specialty">Strength Training</span><br />
                      <span className="specialty">Cardio</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={dwayneJohnson} alt="Dwayne Johnson" className="instructor-image" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: 'white' }}>Dwayne Johnson</Card.Title>
                    <Card.Text>
                      <span className="specialty">Strength Training</span><br />
                      <span className="specialty">HIIT</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={ericWinter} alt="Eric Winter" className="instructor-image" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: 'white' }}>Eric Winter</Card.Title>
                    <Card.Text>
                      <span className="specialty">HIIT</span><br />
                      <span className="specialty">Strength Training</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={scarlettJohansson} alt="Scarlett Johansson" className="instructor-image" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: 'white' }}>Scarlett Johansson</Card.Title>
                    <Card.Text>
                      <span className="specialty">Pilates</span><br />
                      <span className="specialty">Yoga</span>
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
                <img src={alyssaRodriguez} alt="Alyssa Rodriguez" className="testimonial-image" />
              </Col>
              <Col md={10}>
                <blockquote className="blockquote">
                  <p id='testimony-text'>
                    "I've been using Flexify for over a year now, and it has completely transformed my fitness journey. 
                    The extensive library of articles and guides has been incredibly helpful in educating me about 
                    different workout routines and nutrition tips. The BMI calculator is a great tool to keep track of 
                    my progress. The convenience of having everything in one place has made it so much easier to stay 
                    consistent and achieve my fitness goals. Flexify is a <b><em>game-changer</em></b> for anyone looking to improve their health and fitness!"
                  </p>
                  <footer className="blockquote-footer">ALYSSA RODRIGUEZ, Customer</footer>
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