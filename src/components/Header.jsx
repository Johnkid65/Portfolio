import React from 'react';
import '/john.jpg';
import '../app.css'
import '../assets/header.css'

function Header() {
  return (
    <div className="header">
      <img src="john.jpg" alt="Jhon Uzcategui" className="img1"/>
      <h1>Jhon Uzcategui</h1>
      <h2>Web Developer</h2>
    </div>
  );
}

export default Header;