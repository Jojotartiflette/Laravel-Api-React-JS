import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Car from './components/Car';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Photos from './components/Photos';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/car">Car</Link>
              </li>
              <li>
                <Link to="/photos">Photos</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/car" component={Car}/>
            <Route path="/photos" component={Photos}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;