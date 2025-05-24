import React, { use, useEffect, useState } from 'react';
import MyrecipeCard from './MyrecipeCard';
import { AuthContext } from '../Context/AuthContext';

const Myrecipe = () => {
    const [recipe,setrecipe] =useState([])

    const {user}= use(AuthContext);
    const id=user?.email;

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3000/user?email=${id}`)
            .then(res => res.json())
            .then(data=> setrecipe(data))
        }
    },[id])

    const removeSta= (id)=>{
        const newData= recipe.filter(item => item._id !== id)
        setrecipe(newData)
    }

    return (
        <div className='my-14'>
                    <h2 className='text-3xl font-bold mb-8'>My all recipe</h2>

                    {
                    recipe.length === 0 && ( <p className='text-5xl text-center font-bold mt-12'>No recipe please add recipe</p>)
                    }
                    
                    {
                        recipe&& recipe.map(singleRecipe=>(<MyrecipeCard key={singleRecipe._id} singleRecipe={singleRecipe} removeSta={removeSta}></MyrecipeCard>))
                    }
                    
                </div>
    );
};

export default Myrecipe;