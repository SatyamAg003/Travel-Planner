import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16 absolute-bottom-0'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>VOYAGE.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
           <a href="https://www.facebook.com/" target='blank' className='hover:scale-110'> <FaFacebook className='icon' /></a>
           <a href="https://twitter.com/?lang=en" target='blank' className='hover:scale-110'><FaTwitter className='icon' /></a> 
           <a href="https://www.youtube.com" target='blank' className='hover:scale-110'><FaYoutube className='icon' /></a> 
           <a href="https://www.pinterest.com" target='blank' className='hover:scale-110'><FaPinterest className='icon' /></a> 
          <a href="https://www.instagram.com" target='blank' className='hover:scale-110'> <FaInstagram className='icon' /></a>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex cursor-pointer'>
            <li className='hover:scale-110'>About</li>
            <li className='hover:scale-110'>Partnerships</li>
            <li className='hover:scale-110'>Careers</li>
            <li className='hover:scale-110'>Newsroom</li>
            <li className='hover:scale-110'>Advertising</li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
