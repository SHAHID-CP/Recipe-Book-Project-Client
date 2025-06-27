import React, { useState } from 'react';
import HomeCard from './Home/HomeCard';
import { NavLink, useLoaderData } from 'react-router';
import SortButtons from './SortButtons';

const Allrecipe = () => {

    const recipe= useLoaderData();
    const [sdata,setSdata]= useState(recipe)
    const [recipeList,setrecipeList]= useState(sdata); 

    const hundleFilter= (data) =>{
        setrecipeList([])
        if(data==='Alldata'){
            setrecipeList(sdata);
        }
        else{
            const newData= sdata.filter(item => item.quisine === data)
            if(newData){
                setrecipeList(newData)
            }
        }
    }
    const onSort= (datas)=>{
        if(datas==='ascending'){
            const newDatas=[...sdata].sort((a, b) =>
                        a.title.localeCompare(b.title)
            );
            setrecipeList(newDatas);
        }
        else if(datas==='descending'){
            const newDatass=[...sdata].sort((a, b) =>
                        b.title.localeCompare(a.title)
            );
            setrecipeList(newDatass);
        }
    }


    return (
        <div className='my-14'>
            
                
            
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center'>All recipes</h2>

                <div className='mb-12 flex justify-between'>

                <details className="dropdown ">
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
                <div>
                    <SortButtons onSort={onSort}></SortButtons>
                </div>
                </div>
            
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