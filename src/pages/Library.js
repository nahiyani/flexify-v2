import React, { useState } from 'react';
import { Card, Button, Form, Carousel } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Library.css';

import articleImage1 from '../images/article1.webp';
import articleImage2 from '../images/article2.webp';
import articleImage3 from '../images/article3.webp';

const Library = () => {
  const [bmi, setBmi] = useState(null);
  const [bmiResult, setBmiResult] = useState('');
  const [bmiColor, setBmiColor] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    const decimalRegex = /^\d+(\.\d{1,2})?$/;

    if (value <= 0) {
      newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be a positive number`;
    } else if ((fieldName === 'height' || fieldName === 'weight') && !decimalRegex.test(value)) {
      newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be a valid number with up to two decimal places`;
    } else {
      delete newErrors[fieldName];
    }
    setErrors(newErrors);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    validateField(field, value);
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.elements.height.value) / 100;
    const weight = parseFloat(e.target.elements.weight.value);
    const age = parseFloat(e.target.elements.age.value);

    const newErrors = {};
    if (height <= 0) {
      newErrors.height = 'Height must be a positive number';
    }
    if (weight <= 0) {
      newErrors.weight = 'Weight must be a positive number';
    }
    if (age <= 0) {
      newErrors.age = 'Age must be a positive number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const bmi = weight / (height * height);
    setBmi(bmi.toFixed(1));
    if (bmi < 18.5) {
      setBmiResult('Underweight');
      setBmiColor('#ADD8E6');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiResult('Healthy Weight');
      setBmiColor('#22DD22');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiResult('Overweight');
      setBmiColor('#FFD700');
    } else {
      setBmiResult('Obesity');
      setBmiColor('#FF6347');
    }
    setErrors({});
  };

  const clearFields = () => {
    setBmi(null);
    setBmiResult('');
    setBmiColor('');
    setErrors({});
    document.querySelectorAll('.bmi-input').forEach(input => input.value = '');
  };

  return (
    <div>
      <Header />
      <div className="library-container">
        <div className='library-intro'>
          <h1 className="text-center library-title">LIBRARY</h1>
          <p className="text-center">
            Discover the ultimate fitness resource with the Flexify Library. Our extensive collection, from full-length articles to printable guides to audio content, we cater to all fitness levels. Use our BMI calculator to help you stay on track with your fitness goals. Join our community of fitness enthusiasts to keep you motivated and inspired.
          </p>
        </div>

        <div className="articles-section">
          <h2 className="text-center white-title">ARTICLES</h2>
          <div className="articles-row">
            <div className="article-card">
              <div 
                className="placeholder-img" 
                style={{ backgroundImage: `url(${articleImage1})` }}
              ></div>
              <Card.Body className="text-center">
                <Card.Title className="article-title">
                  Get Off Your “Buts” — Ideas To Get Or Maintain Your Fitness Motivation
                </Card.Title>
                <Card.Text className="article-description black-text">
                  Everyone would like a fitness solution in a bottle or a pill; take one pill and devour a slice of pizza without worrying about gaining an ounce.
                  One little sip of a special elixir and off to the beach with your six-pack abs...
                </Card.Text>
                <Button className="learn-more-btn" href='https://medium.com/long-sweet-valuable/get-off-your-buts-ideas-to-get-or-maintain-your-fitness-motivation-279c739f9a7a'>
                  Learn More
                </Button>
              </Card.Body>
            </div>
            <div className="article-card">
              <div 
                className="placeholder-img" 
                style={{ backgroundImage: `url(${articleImage2})` }}
              ></div>
              <Card.Body className="text-center">
                <Card.Title className="article-title">Rowing Machines: The Ultimate Guide to Full-Body Fitness</Card.Title>
                <Card.Text className="article-description black-text">
                Rowing machines, also known as ergometers or “ergs,” have gained significant popularity in recent years as one of the most effective pieces of fitness equipment for a full-body workout. Combining...
                </Card.Text>
                <Button className="learn-more-btn" href='https://medium.com/@mdanwarmorshed70/rowing-machines-the-ultimate-guide-to-full-body-fitness-dced129145c1'>Learn More</Button>
              </Card.Body>
            </div>
            <div className="article-card">
              <div 
                className="placeholder-img" 
                style={{ backgroundImage: `url(${articleImage3})` }}
              ></div>
              <Card.Body className="text-center">
                <Card.Title className="article-title">Crush Your Fitness Goals: Build Strength and Endurance in 4 Weeks</Card.Title>
                <Card.Text className="article-description black-text">
                Ever dreamed of feeling stronger, more resilient, and ready to tackle any physical challenge life throws at you? Whether it’s lifting that heavy box without wincing or running up the stairs without gasping for air,...
                </Card.Text>
                <Button className="learn-more-btn" href='https://medium.com/venturehq/crush-your-fitness-goals-how-to-build-strength-and-endurance-in-4-weeks-afe7d796e725'>Learn More</Button>
              </Card.Body>
            </div>
          </div>
          <Button className="explore-all-articles-btn" href='https://medium.com/search?q=fitness'>Explore All Articles</Button>
        </div>

        <div className="guides-section">
          <h2 className="text-center purple-title">GUIDES</h2>
          <Carousel className="guides-carousel">
            <Carousel.Item>
              <Card className="guide-card">
                <div className="placeholder-img guide-img" style={{ backgroundImage: "url('/path/to/guide1.jpg')" }}></div>
                <Card.Body className="text-center">
                  <Card.Title>Guide #1</Card.Title>
                  <Card.Text>A brief description of Guide #1...</Card.Text>
                  <Button className="learn-more-guides-btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="guide-card">
                <div className="placeholder-img guide-img" style={{ backgroundImage: "url('/path/to/guide2.jpg')" }}></div>
                <Card.Body className="text-center">
                  <Card.Title>Guide #2</Card.Title>
                  <Card.Text>A brief description of Guide #2...</Card.Text>
                  <Button className="learn-more-guides-btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="guide-card">
                <div className="placeholder-img guide-img" style={{ backgroundImage: "url('/path/to/guide3.jpg')" }}></div>
                <Card.Body className="text-center">
                  <Card.Title>Guide #3</Card.Title>
                  <Card.Text>A brief description of Guide #3...</Card.Text>
                  <Button className="learn-more-guides-btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="podcasts-section">
          <h2 className="text-center white-title">PODCASTS</h2>
          <div className="podcasts-row">
            <div className="podcast-card">
              <iframe src="https://open.spotify.com/embed/episode/5hlXVdofkPv4vbME6Ud74N?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="podcast-card">
              <iframe src="https://open.spotify.com/embed/track/0K3IUc3flRZ5RVJmGNiscL?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="podcast-card">
              <iframe src="https://open.spotify.com/embed/track/3KHzOmsIxm1J6qbj5WyjWF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>\
          <Button className="explore-all-articles-btn" href='https://open.spotify.com/playlist/5eSePKblc8XU3iPc4x7eCN'>Explore All Podcasts</Button>
        </div>

        <section className="bmi-calculator-section">
          <h2 className="text-center purple-title">BMI CALCULATOR</h2>
          <Form onSubmit={calculateBMI} className="bmi-form">
            <div className="bmi-inputs">
              <Form.Group className="position-relative">
                <Form.Label className="bmi-label">Age</Form.Label>
                <Form.Control type="number" name="age" className={`bmi-input ${errors.age ? 'is-invalid' : ''}`} required min="0" onChange={(e) => handleInputChange(e, 'age')} />
                {errors.age && <div className="text-danger">{errors.age}</div>}
              </Form.Group>
              <Form.Group className="position-relative">
                <Form.Label className="bmi-label">Height (cm)</Form.Label>
                <Form.Control type="number" name="height" className={`bmi-input ${errors.height ? 'is-invalid' : ''}`} required min="0" step="0.01" onChange={(e) => handleInputChange(e, 'height')} />
                {errors.height && <div className="text-danger">{errors.height}</div>}
              </Form.Group>
              <Form.Group className="position-relative">
                <Form.Label className="bmi-label">Weight (kg)</Form.Label>
                <Form.Control type="number" name="weight" className={`bmi-input ${errors.weight ? 'is-invalid' : ''}`} required min="0" step="0.01" onChange={(e) => handleInputChange(e, 'weight')} />
                {errors.weight && <div className="text-danger">{errors.weight}</div>}
              </Form.Group>
              <div className="button-container">
                <Button variant="primary" type="submit" className="calculate-btn">Calculate</Button>  
              </div>
              <div className="button-container">
                <Button variant="outline-danger" type="button" className="clear-btn" onClick={clearFields}>Clear</Button>
              </div>
            </div>
          </Form>
          {bmi && (
            <div className="bmi-result" style={{ backgroundColor: bmiColor }}>
              <h3 className="bmi-number">{bmi}</h3>
              <p className="bmi-text">{bmiResult}</p>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Library;