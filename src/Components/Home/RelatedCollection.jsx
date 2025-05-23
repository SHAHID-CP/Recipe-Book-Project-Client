import React from 'react';
import { FaBook } from "react-icons/fa";

const RelatedCollection = () => {
    return (
               <div className='bg-gray-100 py-4 rounded-2xl mb-24'>
                    <h2 className='text-3xl font-bold mb-12'>Related Collection</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
        
                        <div className=' p-5 rounded-2xl text-center border-2 border-gray-400 bg-white '>
                            <img className='mx-auto size-32 bg-gray-500 rounded-2xl' src="https://i.ibb.co/N2J3zTty/bakewareind-square-dessert-cake-boxes-with-lid-10pc-pack-250958.jpg" alt="" />
                            <h3 className='mt-4 text-2xl font-bold'>Sweet Treats</h3>
                            <p className='font-medium mt-2 text-sm text-gray-500'>Desserts & Baking</p>
                            
                            <button className='mt-6 btn rounded-xl  text-[#f43f5e]'><FaBook />See Collection</button>
                        </div>
                        <div className=' p-5 rounded-2xl text-center border-2 border-gray-400 bg-white '>
                            <img className='mx-auto size-32 bg-gray-500 rounded-2xl' src="https://i.ibb.co/xtt85X3T/images.jpg" alt="" />
                            <h3 className='mt-4 text-2xl font-bold'>Asian Delights</h3>
                            <p className='font-medium mt-2 text-sm text-gray-500'>Asian Cuisine</p>
                            
                            <button className='mt-6 btn rounded-xl  text-[#10b981]'><FaBook />See Collection</button>
                        </div>
                        <div className=' p-5 rounded-2xl text-center border-2 border-gray-400 bg-white '>
                            <img className='mx-auto size-32 bg-gray-500 rounded-2xl' src="https://i.ibb.co/xKzgGPVS/images-1.jpg" alt="" />
                            <h3 className='mt-4 text-2xl font-bold'>Healthy Habits</h3>
                            <p className='mt-2 font-medium text-sm text-gray-500'>Low Calorie</p>
                            
                            <button className='mt-6 btn rounded-xl  text-[#3b82f6]'><FaBook />See Collection</button>
                        </div>
        
                    </div>
                </div>
    );
};

export default RelatedCollection;