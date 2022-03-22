import "./Navbar.css";

import React from 'react'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="default.asp">Map</a>
        </li>
        <li>
          <a onClick={props.onSaveDays}>Saved Days</a>
        </li>
        <li>
          <a href="contact.asp"></a>
        </li>
        <li>
          <a href="about.asp"></a>
        </li>
      </ul>
    </div>
  );
};
