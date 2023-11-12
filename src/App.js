import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Trends from './components/pages/Trends';
import Signup from './components/pages/Signup';
import Search from './components/pages/Search';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trends" element={<Trends />} />
                <Route
                    path="/Search"
                    element={<Search />}
                />
                <Route
                    path="/sign-up"
                    element={<Signup />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;

