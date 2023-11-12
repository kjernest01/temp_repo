import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Trends from './components/pages/Trends';
import Signup from './components/pages/Signup';
import Search from './components/pages/Search';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/trends' component={Trends} />
          <Route path='search-bar' component={Search}/>
          <Route path='/sign-up' component={Signup} />
        </Routes>
      </Router>
    </>
  );
}

export default App; 