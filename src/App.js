import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Project from './pages/Project'
import Image from './components/Image';
import Resume from './pages/Resume'

function App() {
  return (
   <div>
     
     <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
        </Switch>
     </Router>
    
     
     
     <Footer />
     
   </div>
  );
}

export default App;
