import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './faq.css';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'How do I book a class?',
      content: 'Navigate to the "Classes" section, and browse through the available sessions. Once you find a class that fits your schedule, click the Reserve button. The class should be automatically loaded in the form. Follow the on-screen instructions to complete your reservation. Alternatively, click on the "Reserve" tab in the header, then follow the on-screen instructions to complete your reservation.'
    },
    {
      title: 'How does the BMI calculator work?',
      content: "The BMI (Body Mass Index) calculator works by taking your height and weight measurements to calculate a numerical value. This value is then compared to standard BMI categories to determine whether you are underweight, normal weight, overweight, or obese. Simply enter your height and weight into the calculator, and it will do the rest!"
    },
    {
      title: 'Can I get a membership to book a weekly class?',
      content: "We don't offer memberships yet, but we are committed to listening to customer feedback and implementing suggestions!"
    },
    {
      title: 'Is there a free trial available for new users?',
      content: 'This is a work in progress. This feature will be implemented at a future date.'
    },
    {
      title: 'What should I do if I miss a live class?',
      content: "Flexify will only refund 50% of the initial price paid for the class. However, please feel free to re-book the class!"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>FAQ - Flexify</title>
        <meta name="description" content="This is a detailed description of the page." />
      </Helmet>
      <ScrollToTop />
      <Header />
      <div className="faq-container">
        <div className="flexify-advantage">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p>
            Find answers to our most frequently asked questions and get the help you need to make the most out of your Flexify experience!
          </p>
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
        <div className="spacer"></div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;