import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../assets/5243307-hd_1280_720_25fps.mp4';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
        
      />
      
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-blue-200 p-4'>
        <h1>BON VOYAGE</h1>
        <h2 className='py-4'>EXPLORE THE WORLD !</h2>
        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search Destinations'
              autoFocus
           />
          </div>
          <div>
          <Link to="/Destinations">
            <button>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}/>
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
