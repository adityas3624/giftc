import React from 'react'
import img from './img.png';
import './Navbar.css'
import './Home.js';

export default function Navbar() {
  return (
    <div className='whole'>
         <a href="/" className='a'>
      <div className="name">
       
        <div className="img">
            <img src={img} alt="img"/>
        </div>
        <div className="logo">
            <p>GiftC</p>
        </div>
      </div>
      
      </a>
      <div className="home">
        <a href='./Home.js' id='home'>
      <p>Home</p></a>
      </div>
      <div className="item">
      <a href="/" id='item'>
      <p>Items</p></a>
      </div>
      <div className="about">
      <a href="/" id='about'>
      <p>About</p></a>
      </div>
      <div className="searchbar">
      <div className="sea">
        <input type="text" id='sea' placeholder='search' />
      </div>
      <div className="search">
      <button type="button" id='search' class="btn btn-outline-secondary">Search</button>
      </div>
      </div>
    </div>
  )
}
