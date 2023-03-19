import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Items.css'
export default function items() {
  return (
  <>
  <div className="who">
    <div className="r">
        <div className="nav">
    <Navbar/>
    </div>
    <div className="side">
    <Sidebar/>
    </div>
    </div>
    </div>
    </>
  )
}
