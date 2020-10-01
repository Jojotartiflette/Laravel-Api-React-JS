import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Car from './components/Car';

function App() {
  return (
    <>
      <Car/>
      <Welcome/>
    </>
  );
}

export default App;