import React, { useState } from 'react';
import { Card, Button, Form, Carousel } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Library.css';

const Library = () => {
  const [bmi, setBmi] = useState(null);
  const [bmiResult, setBmiResult] = useState('');
  const [bmiColor, setBmiColor] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.elements.height.value) / 100;
    const weight = parseFloat(e.target.elements.weight.value);
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
  };

  return (
    <div>
      <Header />

      <div className="library-container">
        <div className='library-intro'>
        <h1 className="text-center library-title">LIBRARY</h1>
        <p className="text-center">Discover the ultimate fitness resource with the Flexify Library. Our extensive collection, from full-length articles to printable guides to audio content, we cater to all fitness levels. Use our BMI calculator to help you stay on track with your fitness goals. Join our community of fitness enthusiasts to keep you motivated and inspired.</p>
        </div>
        

        <div className="articles-section">
          <h2 className="text-center white-title">ARTICLES</h2>
          <div className="articles-row">
            <div className="article-card">
              <div className="placeholder-img" style={{ backgroundImage: "url('/path/to/image1.jpg')" }}></div>
              <Card.Body className="text-center">
                <Card.Title className="black-text">Article #1</Card.Title>
                <Card.Text className="article-description black-text">A brief description of Article #1... Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Card.Text>
                <Button className="learn-more-btn">Learn More</Button>
              </Card.Body>
            </div>
            <div className="article-card">
              <div className="placeholder-img" style={{ backgroundImage: "url('/path/to/image2.jpg')" }}></div>
              <Card.Body className="text-center">
                <Card.Title className="black-text">Article #2</Card.Title>
                <Card.Text className="article-description black-text">A brief description of Article #2... Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Card.Text>
                <Button className="learn-more-btn">Learn More</Button>
              </Card.Body>
            </div>
            <div className="article-card">
              <div className="placeholder-img" style={{ backgroundImage: "url('/path/to/image3.jpg')" }}></div>
              <Card.Body className="text-center">
                <Card.Title className="black-text">Article #3</Card.Title>
                <Card.Text className="article-description black-text">A brief description of Article #3... Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Card.Text>
                <Button className="learn-more-btn">Learn More</Button>
              </Card.Body>
            </div>
          </div>
          <Button className="explore-all-articles-btn">Explore All Articles</Button>
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
            <iframe src="https://open.spotify.com/embed/episode/5hlXVdofkPv4vbME6Ud74N?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className="podcast-card">
            <iframe src="https://open.spotify.com/embed/track/0K3IUc3flRZ5RVJmGNiscL?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className="podcast-card">
            <iframe src="https://open.spotify.com/embed/track/3KHzOmsIxm1J6qbj5WyjWF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
</div>

<section className="bmi-calculator-section">
  <h2 className="text-center purple-title">BMI CALCULATOR</h2>
  <Form onSubmit={calculateBMI} className="bmi-form">
    <div className="bmi-inputs">
      <Form.Group>
        <Form.Label className="bmi-label">Age</Form.Label>
        <Form.Control type="number" name="age" className="bmi-input" required />
      </Form.Group>
      <Form.Group>
        <Form.Label className="bmi-label">Height (cm)</Form.Label>
        <Form.Control type="number" name="height" className="bmi-input" required />
      </Form.Group>
      <Form.Group>
        <Form.Label className="bmi-label">Weight (kg)</Form.Label>
        <Form.Control type="number" name="weight" className="bmi-input" required />
      </Form.Group>
      <Button variant="primary" type="submit" className="calculate-btn">Calculate</Button>
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