import React from 'react';


const Carohome = () => {

    

    return (
        <div className='sm:flex justify-between items-center p-5  mb-12 bg-gradient-to-br from-[#ffe6e7] via-[#fff4ec] to-[#fef9c9] rounded-b-2xl'>
            <div className=''>
              <h2 className='text-5xl text-[#ff5835] font-bold sm:size-3/5'>Delicious Recipes For Every Taste</h2>
              <p className='font-medium mt-4 mb-12 sm:size-3/5'>Discover mouth-watering recipes curated by top chefs for everyday cooking. Find your next meal inspiration and start cooking like a pro!</p>
              <button className='btn bg-[#f43f5e] text-white '>Lern more</button>
            </div>
            <div className=''>
              <img className=' rounded-2xl size-3/4 sm:flex justify-self-end' src="https://i.ibb.co/xSV2Zvh9/5e8d013a73-7b3b11ff951250d2fd99-1.png" alt="" />
            </div>
        </div>
    );
};

export default Carohome;