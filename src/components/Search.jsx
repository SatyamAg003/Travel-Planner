import React from 'react';
const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h1>Discover Limitless Horizons with Voyage: Your Ultimate Travel Planner</h1>
          <p className='py-4 text-2xl font-light'>
            
Welcome to Voyage, your gateway to unforgettable journeys! Whether you're craving the tranquility of a remote beach, the vibrant pulse of a bustling city, or the majestic embrace of nature's wonders, Voyage is your compass to extraordinary destinations. Embark on a seamless adventure tailored to your desires, where every moment is curated for discovery and delight. Let Voyage ignite your wanderlust and guide you to the experiences of a lifetime.
          </p>
        </div>
        
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Kerela</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Delhi</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
