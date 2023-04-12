import React from "react";
import '../styles/Intro.css';
import { Link } from "react-router-dom";
import introVid from '../vids/intro-vid.mp4';

function Intro() {
  return (
    <div className="intro">
      <video muted autoPlay loop id='intro-vid'>
        <source src={introVid} type='video/mp4'/>
      </video>
      <div className="intro-body">
        <Link className="shop-mens intro-link" to='/mens'>
          <div className="link-text">Shop Mens</div>
        </Link>
        <Link className="shop-womens intro-link" to='/womens'>
          <div className="link-text">Shop Womens</div>
        </Link>
      </div>
    </div>
  )
}

export default Intro;