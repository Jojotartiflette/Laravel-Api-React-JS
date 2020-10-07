import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Home from './components/Home';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Router>
        <AppRouter/>
      </Router>
    </>
  );
}

export default App;