import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AboutUs from './components/AboutUs';
import Buy from './components/Buy';
import Collaborators from './components/Collaborators';
import Contact from './components/Contact';
import NewsEvents from './components/NewsEvents';
import Products from './components/Products';

$(function() {
  let reactApp = document.getElementById('app')
  if(reactApp){
  ReactDOM.render(
    <Router>
    <div>
      <Link to="/">News and Events</Link>
      <Link to="/AboutUs">About Us</Link>
      <Link to="/Products">Products</Link>
      <Link to="/Buy">Where to Buy</Link>
      <Link to="/Collaborators">Collaborators</Link>
      <Link to="/Contact">Contact Us</Link>

      <Route exact path="/" component={NewsEvents}/>
      <Route path="/AboutUs" component={AboutUs}/>
      <Route path="/Buy" component={Buy}/>
      <Route path="/Collaborators" component={Collaborators}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Products" component={Products}/>
    </div>
    </Router>,
    reactApp
  );
  };
});
