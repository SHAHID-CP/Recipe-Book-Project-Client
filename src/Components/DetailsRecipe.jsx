import React, { use, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { GiCampCookingPot } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const DetailsRecipe = () => {
    const {user}= use(AuthContext);
    const recipe= useLoaderData();
    const {_id,image,title,ingredients,instructions,quisine,preparetiontime,likecount,category,ownerEmail}=recipe || {};
    
    const [chk,setchk]= useState(true);
    const [like,setlike]=useState(likecount)
    
    const hundleLike= ()=>{
        if(user?.email===ownerEmail){
            return
        }
        if(chk){
            const update=like+1;
            setlike(update);
            setchk(false);
            
            const newRecipe={image,title,ingredients,instructions,quisine,preparetiontime,likecount:like+1,ownerEmail,category}
            fetch(`http://localhost:3000/recipe/${_id}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newRecipe)
            })
            .then(res => res.json())
            .then(data=>{
                if(data.modifiedCount){

                    alert("like this recipe")
                }
        })

        }
    }
    return (
        <div className='my-14'>
            
            <h2 className='text-2xl font-bold text-center mb-8 text-green-400'>{like} <Typewriter words={['people interested in this recipe']} loop={5}></Typewriter></h2>

            <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 sm:flex items-end md:w-10/12 mx-auto'>

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
                            {
                                category.map((singlecat,index)=>(<p key={index} className='bg-[#3b83f698] w-fit px-1 rounded-2xl mb-1'> {singlecat}</p>))
                            }
                            <p className='flex items-center gap-2 my-4'><IoMdTime color='red' />{preparetiontime} min.</p>
                            <div className='flex justify-between items-center'>
                                <p className='flex items-center gap-2 text-[#34d399]'><GiCampCookingPot />{quisine}</p>
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