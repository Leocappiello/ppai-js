import './navbar.css'
import NavbarButton from './navbarButton/NavbarButton';

import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarButton></NavbarButton>
      <NavbarButton></NavbarButton>
      <NavbarButton></NavbarButton>
      <NavbarButton></NavbarButton>
    </div>
  );
}

export default Navbar
