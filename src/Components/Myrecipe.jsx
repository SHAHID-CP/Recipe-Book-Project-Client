import React from 'react';
import MyrecipeCard from './MyrecipeCard';

const Myrecipe = () => {
    return (
        <div className='my-14'>
                    <h2 className='text-3xl font-bold mb-8'>My all recipe</h2>
        
                    <MyrecipeCard></MyrecipeCard>
                    <MyrecipeCard></MyrecipeCard>
        
                </div>
    );
};

export default Myrecipe;