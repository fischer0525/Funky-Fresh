import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import AboutUs from './AboutUs';
import Buy from './Buy';
import Collaborators from './Collaborators';
import Contact from './Contact';
import Layout from './Layout';
import NewsEvents from './NewsEvents';
import Products from './Products';

$(function() {
  let reactApp = document.getElementById('app')
  if(reactApp){
  ReactDOM.render(
    <Router history="hashHistory">
      <Route path="/" component={Layout}>
        <IndexRoute component={NewsEvents}></IndexRoute>
        <Route path="AboutUs" component={AboutUs}></Route>
        <Route path="Buy" component={Buy}></Route>
        <Route path="Collaborators" component={Collaborators}></Route>
        <Route path="Contact" component={Contact}></Route>
        <Route path="Layout" component={Layout}></Route>
        <Route path="Products" component={Products}></Route>
      </Route>
    </Router>,
    reactApp
    );
  );
});
