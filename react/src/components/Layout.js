import React, { Component } from 'react';
import { Link } from "react-router"

class Layout extends Component {
  constructor(props) {
  super(props);
  }
  render() {
      return (
        <div>
          <Link to="NewsEvents">News and Events</Link>
          <Link to="About Us">About Us</Link>
          <Link to="Products">Products</Link>
          <Link to="Buy">Where to Buy</Link>
          <Link to="Collaborators">Collaborators</Link>
          <Link to="Contact">Contact Us</Link>
          {this.props.children}
        </div>
      );
  }
}

export default Layout;
