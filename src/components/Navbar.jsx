import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
 const Navbar = () => {
  return ( 
    <nav>
 <ul>
    <li>
    <Link to="/" className='links'>Home</Link>
    </li>
     <li>
        <Link to="/services" className='links'>Services</Link>
    </li> 
    
 </ul>
 </nav>
  );
};
export default Navbar;

