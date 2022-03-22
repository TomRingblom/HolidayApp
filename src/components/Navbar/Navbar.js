import "./Navbar.css";

import React from 'react'

export default function Navbar(props) {
  return (
    <div className="navbar">
    
      
          <a href="default.asp">Map</a>
        
      
          <a onClick={props.onSaveDays}>Saved Days</a>
        
      
          <a href="contact.asp"></a>
        
      
          <a href="about.asp"></a>
        
      
    </div>
  );
};
