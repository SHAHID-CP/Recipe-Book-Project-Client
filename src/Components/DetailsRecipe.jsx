import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { GiCampCookingPot } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

const DetailsRecipe = () => {
    
    const [like,setlike]=useState(0)

    const hundleLike= ()=>{
        const update=like+1;
        setlike(update);
    }
    return (
        <div className='my-14'>
            
            <h2 className='text-2xl font-bold text-center mb-8 text-green-400'>{like} <Typewriter words={['people interested in this recipe']} loop={5}></Typewriter></h2>

            <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 sm:flex items-end md:w-10/12 mx-auto'>

                        <div className='sm:w-1/2'>
                                <img className='w-full max-h-48 sm:max-h-80 rounded-2xl ' src="https://i.ibb.co/xtt85X3T/images.jpg" alt="None" />
                        </div>
                        <div className='mt-2 sm:w-1/2 sm:ml-4'>
                            <h3 className='text-3xl font-bold text-center mb-8 mt-2'>Italian pasta</h3>



                            <div className='mb-4 text-lg font-semibold border-b-1 border-gray-300 border-dashed'>
                                Ingredients:
                                <p className='text-sm pl-2 mb-2'>1 cup sugar</p>
                            </div>

                            <div className='mb-4 text-lg font-semibold border-b-1 border-gray-300 border-dashed'>
                                Instructions:
                                <p className='text-sm pl-2 mb-2'>1 cup sugar</p>
                            </div>
                            <p className='bg-[#3b83f698] w-fit px-1 rounded-2xl'> Breackfast</p>
                            <p className='flex items-center gap-2 my-4'><IoMdTime color='red' />30 min.</p>
                            <div className='flex justify-between items-center'>
                                <p className='flex items-center gap-2 text-[#34d399]'><GiCampCookingPot />Italian</p>
                                <button onClick={hundleLike}>

                                <p className='flex items-center gap-2 cursor-pointer hover:text-[#3b82f6]'><AiFillLike />{like}</p>
                                </button>
                            </div>
                            
                        </div>
                    </div>

        </div>
    );
};

export default DetailsRecipe;