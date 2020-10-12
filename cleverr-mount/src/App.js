import React from 'react';
import logo from './logo.svg';
import "./App.css";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'; 
import { AiFillAmazonCircle } from "react-icons/ai";

function App() {
  return (
    <div class="cover">
      <div class="hero-image"/>
      <div class="hero-text">
        <h1>Cleverr Mount</h1>
        <p>everything you need to mount anything</p>
        <hr></hr>
        <ul>
          <li><a href="http://www.google.ca" target="_blank"><div class="iconn"><FaFacebook style={{size: "50px", color: "white", onMouseOver:"this.style.color='red'"}}/></div></a></li>
          <li><a href="https://www.amazon.com/Sets-Compact-Bike-Mount-Protector/dp/B083HNJ3T4/ref=sr_1_1?dchild=1&keywords=Cleverr+Mount&qid=1602485019&sr=8-1" target="_blank"><AiFillAmazonCircle style={{size: "100px", color: "white"}}/></a></li>
          <li><a href="" target="_blank"><FaInstagramSquare style={{size: "50px", color: "white"}}/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
