import React from 'react'
import img from './img.png';
import './Navbar.css'

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
      <p>Home</p>
      </div>
      <div className="about">
      <p>About</p>
      </div>
      <div className="sea">
        <input type="text" id='sea' placeholder='search' />
      </div>
      <div className="search">
      <button type="button" id='search' class="btn btn-outline-info">Search</button>
      </div>
    </div>
  )
}
