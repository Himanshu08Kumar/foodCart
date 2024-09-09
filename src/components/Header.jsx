import React from 'react'
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div id='main-header'>
        <div id='title'>
        <img src={logo} 
        alt="logo image" 
        className='logo'/>
        <h1>REACTFOOD</h1>
        </div>
        <h2>Cart</h2>
      
    </div>
  )
}

export default Header
