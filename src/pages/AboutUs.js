import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './AboutUs.css';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import theRock from '../images/therock.jpg';
import ryanReynolds from '../images/ryanreynolds.jpg';
import tomBrady from '../images/tombrady.jpg';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-body">
          {content}
        </div>
      )}
    </div>
  );
};

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'COMPREHENSIVE CLASS VARIETY',
      content: 'Flexify offers a wide range of fitness classes that cater to all levels, including yoga, pilates, HIIT, and strength training. This diverse selection ensures users can find the right fit to meet their fitness goals and stay engaged with their workout routine.'
    },
    {
      title: 'EXPERT INSTRUCTORS',
      content: "Flexify's certified fitness professionals are experts in their fields, providing top-tier guidance and motivation. Users receive personalized instruction in both live sessions and on-demand classes, akin to having a personal trainer at home."
    },
    {
      title: 'FLEXIBLE AND ACCESSIBLE',
      content: "Flexify's fully virtual platform allows users to access fitness classes anytime, anywhere, fitting seamlessly into any schedule. The user-friendly app and website make managing workouts convenient, ensuring fitness is accessible and straightforward for everyone."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>About Us - Flexify</title>
        <meta name="description" content="This is a detailed description of the page." />
      </Helmet>
      <ScrollToTop />
      <Header />
      <div className="about-container">
        <div className="flexify-advantage">
          <h2>THE FLEXIFY ADVANTAGE</h2>
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="our-story">
          <div className='our-story-container'>
            <h2 className="our-story-title">OUR STORY</h2>
            <p>
              Flexify was born when Dwayne "The Rock" Johnson envisioned a fitness platform accessible to all.
              Inspired by his journey from wrestler to actor, he aimed to create a space where people could train
              with top instructors anytime, anywhere. With his relentless drive and commitment to fitness, Flexify
              now offers diverse, live and on-demand classes, helping users achieve their goals with the same
              discipline and passion that fueled The Rock's success.
            </p>
          </div>
        </div>

        <div className="meet-the-executives">
          <h2>MEET THE EXECUTIVES</h2>
          <div className="executives">
            <div className="executive-card">
              <div className="executive-photo">
                <img src={theRock} alt="Dwayne Johnson" />
              </div>
              <h3>DWAYNE JOHNSON</h3>
              <h4>Chief Executive Officer</h4>
              <p>
                Renowned for his incredible journey from wrestling champion to Hollywood star,
                Dwayne Johnson founded Flexify to make top-tier fitness accessible to all. His
                dedication, discipline, and relentless drive inspire the platform, offering a diverse
                range of classes to help users achieve their fitness goals with the same passion that
                fuels his success.
              </p>
            </div>
            <div className="executive-card">
              <div className="executive-photo">
                <img src={ryanReynolds} alt="Ryan Reynolds" />
              </div>
              <h3>RYAN REYNOLDS</h3>
              <h4>Chief Operating Officer</h4>
              <p>
                As Flexify's COO, Ryan Reynolds brings his sharp wit and business acumen to the team.
                Known for his charismatic acting career and entrepreneurial ventures, Ryan ensures
                seamless operations and innovative strategies at Flexify. His commitment to wellness
                and creativity helps drive the company's mission to provide engaging, high-quality
                fitness experiences to users worldwide.
              </p>
            </div>
            <div className="executive-card">
              <div className="executive-photo">
                <img src={tomBrady} alt="Tom Brady" />
              </div>
              <h3>TOM BRADY</h3>
              <h4>Chief Financial Officer</h4>
              <p>
                Legendary quarterback Tom Brady, now Flexify's CFO, applies his strategic mindset
                and competitive spirit to the company's financial leadership. With an illustrious
                career in the NFL, Tom's expertise in performance and resilience translates into robust
                financial strategies for Flexify, ensuring sustainable growth and the continued delivery
                of exceptional fitness programs to its users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;