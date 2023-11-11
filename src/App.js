import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Trends from './components/pages/Trends';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
          {/* <Route path='/' exact component={Home} />
          <Route path='/trends' component={Trends} />
          <Route path='/products' component={Products} /> 
          <Route path='/signup' component={Signup} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App; 