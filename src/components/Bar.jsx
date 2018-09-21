import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Bar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavLink exact to="/">Window One</NavLink>
        <NavLink exact to="/two">Window Two</NavLink>
      </div>
    );
  }
}

export default Bar;
