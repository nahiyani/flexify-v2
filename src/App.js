import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import Classes from './pages/Classes';
import Instructors from './pages/Instructors';
import Library from './pages/Library';
import Reserve from './pages/Reserve';
import FAQ from './pages/faq';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} /> 
        <Route path='/classes' element={<Classes />} />
        <Route path='/instructors' element={<Instructors />} />
        <Route path='/library' element={<Library />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App