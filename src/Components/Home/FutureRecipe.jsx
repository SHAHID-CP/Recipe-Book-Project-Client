import React from 'react';
import { FaBookOpen } from "react-icons/fa";

const FutureRecipe = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-12'>Featured Recipe Books</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>

                <div className=' p-5 rounded-2xl text-center  bg-gradient-to-br from-[#ffe6e7] via-[#fff4ec] to-[#fef9c9]'>
                    <img className='mx-auto size-32 bg-gray-500 rounded-2xl' src="https://i.ibb.co/JwJLbztK/images-2.jpg" alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>Everyday Gourmet</h3>
                    <p className='font-medium my-2 text-xs text-gray-500'>By Chef Maria Torres</p>
                    <p className='font-medium'>100+ quick, easy, and delicious recipes for busy people who love good food.</p>
                    <button className='mt-6 btn rounded-xl text-white bg-[#f43f5e]'><FaBookOpen />Preview</button>
                </div>
                <div className=' p-5 rounded-2xl text-center  bg-gradient-to-br from-[#fdf9c5] via-[#fafbd7] to-[#f8fee4]'>
                    <img className='mx-auto size-32 bg-gray-500 rounded-2xl' src="https://i.ibb.co/WWJw26jQ/images-3.jpg" alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>The Veggie Table</h3>
                    <p className='font-medium my-2 text-xs text-gray-500'>By Chef Arun Patel</p>
                    <p className='font-medium'>A modern guide to creative vegetarian dishes for all occasions.</p>
                    <button className='mt-6 btn rounded-xl text-white bg-[#10b981]'><FaBookOpen />Preview</button>
                </div>
                <div className=' p-5 rounded-2xl text-center  bg-gradient-to-br from-[#dcecfe] via-[#e5f6fe] to-[#ebfcff]'>
                    <img className='mx-auto size-32 bg-gray-500 rounded-2xl' src="https://i.ibb.co/6RGMSwfy/florida-spiny-lobster.jpg" alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>Seafood Sensations</h3>
                    <p className='my-2 font-medium text-xs text-gray-500'>By Chef Mia Lee</p>
                    <p className='font-medium'>From the ocean to your plate: fresh, flavorful seafood recipes for everyone.</p>
                    <button className='mt-6 btn rounded-xl text-white bg-[#3b82f6]'><FaBookOpen />Preview</button>
                </div>

            </div>
        </div>
    );
};

export default FutureRecipe;