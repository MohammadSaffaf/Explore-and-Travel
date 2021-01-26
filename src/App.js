
import './App.css';
import Navigation from './components/Navigation';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';
import Destinations from './components/Destinations';
import About from './components/About';
import Partner from './components/Partner';

function App() {
  
  return (
   <Router>
     <Navigation/>
     
     <Router/>
     <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Destinations">
            <Destinations/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Partner" component={Partner}/>
        </Switch>
   </Router>
  );
}

export default App;
