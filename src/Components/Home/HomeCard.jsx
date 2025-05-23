import React from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';

const HomeCard = ({singleRecipe}) => {

    const {image,title,quisine,likecount}= singleRecipe || {};
    
    return (
        <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100'>
            <img className='w-full max-h-48 rounded-2xl ' src={image} alt="None" />
            <div className='mt-2'>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-2 text-[#34d399]'><GiCampCookingPot />{quisine}</p>
                    <p className='flex items-center gap-2 text-[#3b82f6]'><AiFillLike />{likecount}</p>
                </div>
                <h3 className='text-2xl font-semibold text-center mb-8 mt-2'>{title}</h3>
                <Link to='/details'>
                <button className='btn w-full rounded-2xl bg-[#f43f5e] text-white'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeCard;