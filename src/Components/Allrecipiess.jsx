import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';
import { AiFillLike } from 'react-icons/ai';

const Allrecipiess = () => {
    
    const [recipe,setrecipe] =useState([])
    const recipes= useLoaderData();
    useEffect(()=>{
                if(recipes){
                    setrecipe(recipes)
                }
    },[recipes])
    if(recipe.length === 0){
        return <p className='text-5xl text-center font-bold mt-12'>No recipe please add recipe</p>
    }
    return (
         <div className='my-14'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center'>All Items</h2>
        
                            
                        <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Time</th>
                                    <th>Like Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                
                                    {
                                        recipe&& recipe.map((singleItem,index)=><tr key={index}>
                                        <th>{index+1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                <img src={singleItem?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{singleItem?.title}</td>
                                        
                                        <td>{singleItem?.quisine}</td>
                                        <td> min: {singleItem?.preparetiontime}</td>
                                        <td>
                                            <p className='flex items-center gap-2 text-[#3b82f6]'><AiFillLike />{singleItem?.likecount}</p>
                                        </td>
                                    </tr>)
                                    }
                                    
                            </tbody>
                        </table>
                    </div>
                            
                            
                        </div>
    );
};

export default Allrecipiess;