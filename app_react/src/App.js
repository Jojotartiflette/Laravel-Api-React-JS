import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Car from './components/Car';

function App() {
  return (
    <>
      <Car brand="BMW" year="1978"/>
      <Car brand="Toyota" year="1984"/>
      <Car brand="Jaguar" year="1992"/>
    </>
  );
}

export default App;