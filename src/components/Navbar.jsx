import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import SignIn from './SignIn';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <><div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-blue-950 bg-slate-300'>
      <div>
        
        <h1 className={logo ? 'hidden' : 'block'}>Voyage</h1>
      </div>
      <ul className='hidden md:flex'>
        <Link to="/">
        <li>Home</li></Link>
        <Link to="/Destinations"><li>Destinations</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        
      </ul>
      <div className='hidden md:flex'>
       
        <Link to="/SignIn"><BsPerson size={20} /></Link>
        
      </div>


      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>Voyage</h1>
          <Link to="/">
        <li>Home</li></Link>
        <Link to="/Destinations"><li>Destinations</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
      
    </div>
    <br /><br />
    </>
    
  );
};

export default Navbar;
