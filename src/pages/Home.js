import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [interests, setInterests] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    const nameRegex = /^[A-Za-z]+$/;

    if (name === 'firstName' || name === 'lastName') {
      const fieldName = name === 'firstName' ? 'First Name' : 'Last Name';
      if (!value) {
        newErrors[name] = `${fieldName} is required`;
      } else if (!nameRegex.test(value)) {
        newErrors[name] = `${fieldName} must contain only letters`;
      } else {
        delete newErrors[name];
      }
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        newErrors[name] = 'Email is required';
      } else if (!emailRegex.test(value)) {
        newErrors[name] = 'Email is not valid';
      } else {
        delete newErrors[name];
      }
    }
    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleInterestClick = (interest) => {
    setInterests((prevInterests) => {
      const newInterests = prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest)
        : [...prevInterests, interest];

      if (newInterests.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          interests: 'At least one interest must be selected',
        }));
      } else {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors.interests;
          return newErrors;
        });
      }

      return newInterests;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    if (interests.length === 0) {
      newErrors.interests = 'At least one interest must be selected';
    }
    if (Object.keys(newErrors).length === 0) {
      setShowSuccessModal(true);
      setFormData({ firstName: '', lastName: '', email: '' });
      setInterests([]);
    }
    setErrors(newErrors);
  };

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
            <div className="language-switcher-container">
              <LanguageSwitcher />
            </div>
            <div className="text-stuff hero-text-stuff">
              <h1 className="main-header">{t('YOUR_PERSONAL_VIRTUAL_FITNESS_STUDIO')}</h1>
              <p>{t('WELCOME_TO_FLEXIFY')}</p>
              <p>{t('JOIN_OUR_COMMUNITY')}</p>
            </div>
            <Link to="/library" className="nav-link-custom">
              <Button className="purple-button header-button">
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
                    <div className="specialties">
                      <span className="specialty">{t('Strength_Training')}</span>
                      <br />
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
                    <div className="specialties">
                      <span className="specialty">{t('Strength_Training')}</span>
                      <br />
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
                    <div className="specialties">
                      <span className="specialty">{t('HIIT')}</span>
                      <br />
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
                    <div className="specialties">
                      <span className="specialty">{t('Pilates')}</span>
                      <br />
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
                  <p className="testimony-text">{t('Alyssa_Rodriguez_Testimony')}</p>
                  <footer className="blockquote-footer">{t('ALYSSA_RODRIGUEZ')}</footer>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="join-section text-center">
  <h2 className="join-community-title">
    {t('JOIN_OUR_COMMUNITY')}
  </h2>
  <Container>
    <Form onSubmit={handleSubmit} className="join-form">
      <Row>
        <Col md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>{t('First Name')}</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">{t(errors.firstName)}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>{t('Last Name')}</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">{t(errors.lastName)}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group controlId="email">
            <Form.Label>{t('Email')}</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{t(errors.email)}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="interests-row">
        <Col md={12}>
          <Form.Label>{t('Interests')}</Form.Label>
          <div className="interests-options">
            {['Cardio', 'Pilates', 'HIIT', 'Yoga', 'Strength Training'].map((interest) => (
              <Button
                key={interest}
                variant={interests.includes(interest) ? 'selected' : 'unselected'}
                onClick={() => handleInterestClick(interest)}
                className={`interest-button ${interests.includes(interest) ? 'selected' : 'unselected'}`}
              >
                {t(interest)}
              </Button>
            ))}
          </div>
          {errors.interests && <div className="text-danger">{t(errors.interests)}</div>}
        </Col>
      </Row>
      <Button type="submit" className="mt-3 purple-button" style={{ width: '250px' }}>
        {t('JOIN')}
      </Button>
    </Form>
  </Container>

  <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="success-modal">
    <Modal.Header closeButton>
      <Modal.Title>{t('SUCCESS!')}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{t("Thank you for joining Flexify's community!")}</Modal.Body>
    <Modal.Footer>
      <Button variant="success" onClick={() => setShowSuccessModal(false)}>
        {t('Close')}
      </Button>
    </Modal.Footer>
  </Modal>
</section>

      </div>
      <Footer />
    </div>
  );
};

export default Home;