"use client"

import { use, useState } from "react";
import { MdAccessTime, MdFavorite, MdRestaurant } from "react-icons/md"
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import { toast } from 'react-toastify';

export default function RecipeDetailss() {
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
                fetch(`https://my-recipe-server-nine.vercel.app/recipe/${_id}`,{
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newRecipe)
                })
                .then(res => res.json())
                .then(data=>{
                    if(data.modifiedCount){
                        toast("Like successfully!")
                    }
            })
    
            }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Single Recipe Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Image Section - Smaller left column */}
            <div className="relative md:order-1">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 md:h-64 object-cover" />
              <div onClick={hundleLike} className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                <MdFavorite className="w-4 h-4 text-red-500" />
              </div>
            </div>

            {/* Content Section - Larger right columns */}
            <div className="md:col-span-2 p-6 md:order-2">
              {/* Title and Meta Info */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdAccessTime className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-sm md:text-base">{preparetiontime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdRestaurant className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-sm md:text-base">{quisine}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdFavorite className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-sm md:text-base">{likecount.toLocaleString()} likes</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients Section */}
              <div className="mb-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Ingredients</h2>
                <div className="grid md:grid-cols-2 gap-2">
                  <div  className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm md:text-base">{ingredients}</span>
                    </div>
                </div>
              </div>

              {/* Instructions Section */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Instructions</h2>
                <div className="space-y-3">
                  <div className="flex gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{instructions}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
