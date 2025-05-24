import React from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';

const MyrecipeCard = ({singleRecipe,removeSta}) => {
    const {_id,image,title,ingredients,instructions,quisine,preparetiontime,likecount,category}=singleRecipe || {};

    const hundleDelete= ()=>{
            removeSta(_id)
            fetch(`http://localhost:3000/recipe/${_id}`,{
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.deletedCount){
                    toast("Recime delete successfully")
                    removeSta(_id)
                }
            })
    }
    return (
        <div>
            
            <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 sm:flex items-end md:w-10/12 mx-auto mb-8'>
        
                <div className='sm:w-1/2'>
                    <img className='w-full max-h-48 sm:max-h-80 rounded-2xl ' src={image} alt="None" />
                </div>
                <div className='mt-2 sm:w-1/2 sm:ml-4'>
                    <h3 className='text-3xl font-bold text-center mb-8 mt-2'>{title}</h3>
        
        
        
                    <div className='mb-4 text-lg font-semibold border-b-1 border-gray-300 border-dashed'>
                        Ingredients:
                        <p className='text-sm pl-2 mb-2'>{ingredients}</p>
                    </div>
        
                    <div className='mb-4 text-lg font-semibold border-b-1 border-gray-300 border-dashed'>
                        Instructions:
                        <p className='text-sm pl-2 mb-2'>{instructions}</p>
                    </div>


                    <div className='flex justify-between items-center'>
                    
                    <div>
                        {
                                category.map((singlecat,index)=>(<p key={index} className='bg-[#3b83f698] w-fit px-1 rounded-2xl mb-1'> {singlecat}</p>))
                        }
                    </div>

                    <button className='cursor-pointer'>
                        <GrUpdate color='green'/>
                    </button>

                    </div>
                    <div className='my-4 flex justify-between items-center'>
                    <p className='flex items-center gap-2 '><IoMdTime color='red' />{preparetiontime} min.</p>
                    <button onClick={hundleDelete} className='cursor-pointer'>
                        <MdDeleteForever  color='red' size={24}/>
                    </button>
                    </div>


                    <div className='flex justify-between items-center'>
                        <p className='flex items-center gap-2 text-[#34d399]'><GiCampCookingPot />{quisine}</p>
                        <p className='flex items-center gap-2  hover:text-[#3b82f6]'><AiFillLike />{likecount}</p>
                        
                    </div>
                                    
                </div>
            </div>
        </div>
    );
};

export default MyrecipeCard;