import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Match } from 'react-router-dom'

import AboutUs from './components/AboutUs';
import Splash from './components/Splash';
import Buy from './components/Buy';
import Business from './components/Business';
import Contributors from './components/Contributors';
import Contact from './components/Contact';
import NewsEvents from './components/NewsEvents';
import NewsItem from './components/NewsItem';
import EventsItem from './components/EventsItem';
import Products from './components/Products';
import Product from './components/Product';

$(function() {
  let reactApp = document.getElementById('app')
  if(reactApp){
  ReactDOM.render(
    <Router>
    <div>
      <header className="main-header">
        <h1 className="Logo"><Link to="/">Funky Fresh</Link></h1>
        <ul className="main-nav">
          <Link to="/NewsEvents">News and Events</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Buy">Where to Buy</Link>
          <Link to="/Contributors">Contributors</Link>
          <Link to="/Contact">Contact Us</Link>
        </ul>
      </header>
        <Route exact path="/" component={Splash}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/Buy" component={Buy}/>
        <Route path="/Buy/Business" component={Business}/>
        <Route path="/Contributors" component={Contributors}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Products/Product" component={Product} />
        <Route path="/NewsEvents" component={NewsEvents} />
        <Route path="/NewsEvents/NewsItem" component={NewsItem} />
        <Route path="/NewsEvents/EventsItem" component={EventsItem} />
    </div>
    </Router>,
    reactApp
  );
  };
});
