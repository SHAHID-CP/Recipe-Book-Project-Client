import React, { useState } from 'react';
import HomeCard from './Home/HomeCard';
import { NavLink, useLoaderData } from 'react-router';

const Allrecipe = () => {

    const recipe= useLoaderData();
    const [recipeList,setrecipeList]= useState(recipe);

    const hundleFilter= (data) =>{
        setrecipeList([])
        if(data==='Alldata'){
            setrecipeList(recipe);
        }
        else{
            const newData= recipe.filter(item => item.quisine === data)
            if(newData){
                setrecipeList(newData)
            }
        }
    }


    return (
        <div className='my-14'>
            
                
            
                <h2 className='text-3xl font-bold mb-2'>All recipes</h2>

                <details className="dropdown mb-12">
                <summary className="btn m-1">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                    <button onClick={()=>hundleFilter("Italian")}>
                        <li className='cursor-pointer'>Italian</li>
                    </button>
                    <button onClick={()=>hundleFilter("Mexican")}>
                        <li className='cursor-pointer'>Mexican</li>
                    </button>
                    <button onClick={()=>hundleFilter("Indian")}>
                        <li className='cursor-pointer'>Indian</li>
                    </button>
                    <button onClick={()=>hundleFilter("Chinese")}>
                        <li className='cursor-pointer'>Chinese</li>
                    </button>
                    <button onClick={()=>hundleFilter("Others")}>
                        <li className='cursor-pointer'>Others</li>
                    </button>
                    <button onClick={()=>hundleFilter("Alldata")}>
                        <li className='cursor-pointer'>All data</li>
                    </button>
                </ul>
                </details>
            
            {
                    recipeList.length === 0 && ( <p className='text-5xl text-center font-bold mt-12'>No data this category</p>)
            }

            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                {
                    recipeList.map(singleRecipe =>(<HomeCard key={singleRecipe._id} singleRecipe={singleRecipe}></HomeCard>))
                }
            </div>
        </div>
    );
};

export default Allrecipe;