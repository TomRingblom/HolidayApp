import "./Navbar.css";
import React from 'react';
import GlobeAnimated from "../Assets/GlobeAnimated.gif";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <img className="globe" src={GlobeAnimated} alt="globe"></img>
      <a href="default.asp">Map</a>
      <a onClick={props.onSaveDays}>My Days</a>
      <a href="contact.asp">Countries</a>
      <a href="about.asp">About</a>
    </div>
  );
};
