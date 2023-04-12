import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from './components/Intro';
import About from './pages/About';
import Header from './components/Header';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import ScrollToTop from './components/ScrollToTop';
import Cart from './components/Cart';


function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Cart />
      <div className='App'>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Intro />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/mens' element={<Mens />}/>
          <Route exact path='/womens' element={<Womens />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;