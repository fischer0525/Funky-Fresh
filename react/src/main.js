import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch, Match, Redirect, Hash } from 'react-router-dom'

import AboutUs from './components/AboutUs';
import Splash from './components/Splash';
import Buy from './components/Buy';
import Business from './components/Business';
import Contributors from './components/Contributors';
import Contributor from './components/Contributor';
import Contact from './components/Contact';
import News from './components/News';
import Events from './components/Events';
import NewsItem from './components/NewsItem';
import EventsItem from './components/EventsItem';
import Products from './components/Products';
import Product from './components/Product';
import Submitted from './components/Submitted';

$(function() {
  let reactApp = document.getElementById('app')
  if(reactApp){
  ReactDOM.render(
    <Router>
    <div>
      <header className="main-header shadow">
        <Link to="/"><img src="https://s3.amazonaws.com/funky-fresh/FF_logo.png" className="logo"/></Link>
        <div className="main-nav">
          <Link to="/News">News</Link>
          <Link to="/Events">Events</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Buy">Where to Buy</Link>
          <Link to="/Contributors">Contributors</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
      </header>
        <Route exact path="/" component={Splash}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/Buy" component={Buy}/>
        <Route path="/Buy/Business" component={Business}/>
        <Route path="/Contributors" component={Contributors}/>
        <Route path="/Contributors/Contributor" component={Contributor}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Products/Product" component={Product} />
        <Route path="/News" component={News} />
        <Route path="/Events" component={Events} />
        <Route path="/News/NewsItem" component={NewsItem} />
        <Route path="/Events/EventsItem" component={EventsItem} />
        <Route path="/Submitted" component={Submitted} />
        <footer className="main-footer">
        <h1>Populating info for sizing reason temp</h1>
        </footer>
    </div>
    </Router>,
    reactApp
  );
  };
});
