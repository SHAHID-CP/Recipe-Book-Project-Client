import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { MdDeleteForever } from 'react-icons/md';
import LoadingEle from './LoadingEle';

const Myrecipe = () => {
    const [recipe,setrecipe] =useState([])
    const [loadings,setLoading]=useState(true)

    const {user}= use(AuthContext);
    const id=user?.email;

    useEffect(()=>{
        if(id){
            fetch(`https://my-recipe-server-nine.vercel.app/user?email=${id}`)
            .then(res => res.json())
            .then(data=> {
                setrecipe(data)
                setLoading(false)
            })
        }
    },[id])

    const removeSta= (id)=>{
        const newData= recipe.filter(item => item._id !== id)
        setrecipe(newData)
    }
    if(loadings){
        <LoadingEle></LoadingEle>
        return;
    }
    if(recipe.length === 0){
        return <p className='text-5xl text-center font-bold mt-12'>No recipe please add recipe</p>
    }
    return (
        <div className='my-14'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center'>My all Items</h2>

                    
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
                            <th>Manage Item</th>
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
                                    <button onClick={()=>removeSta(singleItem._id)} className='cursor-pointer'><MdDeleteForever  color='red' size={22}/></button>
                                </td>
                            </tr>)
                            }
                            
                    </tbody>
                </table>
            </div>
                    
                    
                </div>
    );
};

export default Myrecipe;

// {
//                         recipe&& recipe.map(singleRecipe=>(<MyrecipeCard key={singleRecipe._id} singleRecipe={singleRecipe} removeSta={removeSta}></MyrecipeCard>))
// }