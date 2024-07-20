import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import LanguageSwitcher
import { useTranslation } from 'react-i18next';
import CardioBlast from '../images/classes/cardioblast.webp';
import StrengthMastery from '../images/classes/strengthmastery.webp';
import YogaRelaxation from '../images/classes/yogarelaxation.webp';
import arnold from '../images/arnold.png';
import dwayneJohnson from '../images/dwaynejohnson.webp';
import ericWinter from '../images/ericwinter.webp';
import scarlettJohansson from '../images/scarlettjohansson.webp';
import alyssaRodriguez from '../images/alyssarodriguez.jpg';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

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
            <div className="language-switcher-container"> {/* Position the language switcher */}
              <LanguageSwitcher />
            </div>
            <div className='text-stuff'>
              <h1 className='main-header'>
                {t('YOUR_PERSONAL_VIRTUAL_FITNESS_STUDIO')}
              </h1>
              <p>{t('WELCOME_TO_FLEXIFY')}</p>
              <p>{t('JOIN_OUR_COMMUNITY')}</p>
            </div>
            <Link to="/library" className="nav-link-custom">
              <Button className='purple-button header-button'>
                {t('EXPLORE_OUR_COLLECTION')}
              </Button>
            </Link>
          </div>
        </section>

        <section className="featured-classes text-center">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '25px' }}>
            {t('FEATURED_CLASSES')}
          </h2>
          <Container>
            <Row>
              <Col md={4}>
                <Card className="featured-class-card">
                  <div className="placeholder-image">
                    <img src={CardioBlast} alt="Cardio Blast" className="featured-class-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className="featured-classes-title">{t('Cardio_Blast')}</Card.Title>
                    <div>{t('Cardio_Blast_Description')}</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="featured-class-card">
                  <div className="placeholder-image">
                    <img src={StrengthMastery} alt="Strength Mastery" className="featured-class-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className="featured-classes-title">{t('Strength_Mastery')}</Card.Title>
                    <div>{t('Strength_Mastery_Description')}</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="featured-class-card">
                  <div className="placeholder-image">
                    <img src={YogaRelaxation} alt="Yoga Relaxation" className="featured-class-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className="featured-classes-title">{t('Yoga_Relaxation')}</Card.Title>
                    <div>{t('Yoga_Relaxation_Description')}</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Link to="/classes" className="nav-link-custom">
              <Button className="mt-3 white-button" style={{ width: '250px' }}>
                {t('EXPLORE_ALL')}
              </Button>
            </Link>
          </Container>
        </section>

        <section className="instructors-section text-center">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', marginTop: '30px', marginBottom: '20px' }}>
            {t('INSTRUCTORS')}
          </h2>
          <Container>
            <Row>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={arnold} alt="Arnold Schwarzenegger" className="instructor-image" />
                  <Card.Body>
                    <Card.Title className="card-title">{t('Arnold_Schwarzenegger')}</Card.Title>
                    <div className='specialties'>
                      <span className="specialty">{t('Strength_Training')}</span><br />
                      <span className="specialty">{t('Cardio')}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={dwayneJohnson} alt="Dwayne Johnson" className="instructor-image" />
                  <Card.Body>
                    <Card.Title className="card-title">{t('Dwayne_Johnson')}</Card.Title>
                    <div className='specialties'>
                      <span className="specialty">{t('Strength_Training')}</span><br />
                      <span className="specialty">{t('HIIT')}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={ericWinter} alt="Eric Winter" className="instructor-image" />
                  <Card.Body>
                    <Card.Title className="card-title">{t('Eric_Winter')}</Card.Title>
                    <div className='specialties'>
                      <span className="specialty">{t('HIIT')}</span><br />
                      <span className="specialty">{t('Strength_Training')}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="instructor-card">
                  <img src={scarlettJohansson} alt="Scarlett Johansson" className="instructor-image" />
                  <Card.Body>
                    <Card.Title className="card-title">{t('Scarlett_Johansson')}</Card.Title>
                    <div className='specialties'>
                      <span className="specialty">{t('Pilates')}</span><br />
                      <span className="specialty">{t('Yoga')}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Link to="/instructors" className="nav-link-custom">
              <Button className="mt-3 purple-button" style={{ width: '250px' }}>
                {t('MEET_THEM_ALL')}
              </Button>
            </Link>
          </Container>
        </section>

        <section className="testimony-section">
          <h2 style={{ fontSize: '75px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '50px' }}>
            {t('TESTIMONY')}
          </h2>
          <Container>
            <Row>
              <Col md={2}>
                <img src={alyssaRodriguez} alt="Alyssa Rodriguez" className="testimonial-image" />
              </Col>
              <Col md={10}>
                <blockquote className="blockquote">
                  <p className="testimony-text">
                    {t('Alyssa_Rodriguez_Testimony')}
                  </p>
                  <footer className="blockquote-footer">{t('ALYSSA_RODRIGUEZ')}</footer>
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