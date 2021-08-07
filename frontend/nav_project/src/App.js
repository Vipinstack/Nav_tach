import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import pageNotFound from './components/pageNotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <div>
    
    <Router>
    <Navbar/>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/contact"} exact component={Contact} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"/signup"} exact component={Signup} />
        <Route component={pageNotFound}/>
      </Switch>
    </Router>
    </div>
)
}