import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './hometranslation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/flexify-v2">  // Set the basename
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();