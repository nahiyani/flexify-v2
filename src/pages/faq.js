import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
      <div>
        <Helmet>
        <title>FAQ - Flexify</title>
        <meta name="description" content="This is a detailed description of the page." />
      </Helmet>
        <Header />
        <Footer />
      </div>
    );
  };
  
  export default Home;