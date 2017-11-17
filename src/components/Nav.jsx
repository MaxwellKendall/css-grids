import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1>CSS Grid Tutorial</h1>
        <Link to="one">
          Part One
        </Link>
        <Link to="two">
          Part Two
        </Link>
        <Link to="three">
          Part Three
        </Link>
        {/* <Link to="one">
          Part One
        </Link>
        <Link to="one">
          Part One
        </Link> */}
      </div>

    );
  }
}
