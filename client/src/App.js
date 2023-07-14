import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav.js'


function App() {
  return (
    <Router>
    <Nav />
    </Router>
  );
}

export default App;
