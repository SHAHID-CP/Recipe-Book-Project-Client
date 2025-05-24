import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import HomeCard from './HomeCard';
import { Link, useLoaderData } from 'react-router';

const Toprecipe = () => {
    const recipe= useLoaderData();
    const [recipeList,setrecipeList]=useState([]);

    useEffect( ()=>{
        if(recipe){
            const data=[];
            for( let i=0; i<6; i++){
                data.push(recipe[i]);
            }
            setrecipeList(data);
        }
    },[recipe])
    

    return (
        <div className=' mb-12'>
            <div className='mb-10 flex justify-between items-center'>

            <h2 className='text-3xl font-bold'>Top Recipe</h2>
            <Link to='/allrecipe'>
            <button className='btn border-none bg-white text-[#f43f5e] font-bold'>View all<FaArrowRight /></button>
            </Link>
            </div>
            
            <div className=' grid grid-cols-1 sm:grid-cols-3 gap-8'>
                
                {
                    recipeList&& recipeList.map(singleRecipe=>(<HomeCard key={singleRecipe._id} singleRecipe={singleRecipe}></HomeCard>)) 
                }
            </div>
            
        </div>
    );
};

export default Toprecipe;