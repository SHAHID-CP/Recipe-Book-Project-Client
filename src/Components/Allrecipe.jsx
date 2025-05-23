import React from 'react';
import HomeCard from './Home/HomeCard';
import { useLoaderData } from 'react-router';

const Allrecipe = () => {

    const recipe= useLoaderData();
    return (
        <div className='my-14'>
            
            <h2 className='text-3xl font-bold mb-12'>All recipes</h2>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                {
                    recipe.map(singleRecipe =>(<HomeCard key={singleRecipe._id} singleRecipe={singleRecipe}></HomeCard>))
                }
            </div>
        </div>
    );
};

export default Allrecipe;