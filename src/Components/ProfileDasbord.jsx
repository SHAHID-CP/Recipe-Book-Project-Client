"use client"

import { use, useEffect, useState } from "react"
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCalendarToday,
  MdStar,
  MdTrendingUp,
  MdRestaurant,
  MdRestaurantMenu,
} from "react-icons/md"
import { AuthContext } from "../Context/AuthContext"
import { useLoaderData } from "react-router"

export default function ProfileDashboard() {
const datas=useLoaderData();
const [recipe,setrecipe] =useState([])
const {user}=use(AuthContext)
const id=user?.email;

    useEffect(()=>{
        if(id){
            fetch(`https://my-recipe-server-nine.vercel.app/user?email=${id}`)
            .then(res => res.json())
            .then(data=> {
                setrecipe(data)
            })
        }
    },[id])

  const stats = [
    { label: "Recipes Created", value:recipe?.length, icon: <MdRestaurant className="w-4 h-4" /> },
    { label: "Recipe Collections", value: datas?.length, icon: <MdRestaurantMenu className="w-4 h-4" /> },
    
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profile Overview</h1>
            <p className="text-gray-600 mt-1">Manage your profile and view your recipe activity</p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-center pb-4 p-6">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user?.displayName}</h2>
                <p className="text-gray-600 text-sm">Recipe Creator & Food Blogger</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <MdStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-sm text-gray-500">(127 reviews)</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MdEmail className="w-4 h-4 text-gray-500" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MdPhone className="w-4 h-4 text-gray-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MdLocationOn className="w-4 h-4 text-gray-500" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MdCalendarToday className="w-4 h-4 text-gray-500" />
                    <span>Joined March 2021</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-sm mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Italian Cuisine</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Baking & Desserts</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Healthy Meals</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Quick Recipes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2  gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MdTrendingUp className="w-5 h-5" />
                  Recent Recipe Activity
                </h3>
                <p className="text-sm text-gray-600 mt-1">Your latest recipe creations and updates</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Published new recipe "Creamy Mushroom Risotto"</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Added detailed cooking instructions and nutritional information
                      </p>
                      <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Updated "30-Minute Pasta Collection"</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Added 3 new quick pasta recipes with step-by-step photos
                      </p>
                      <span className="text-xs text-gray-400">1 day ago</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Responded to recipe reviews and comments</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Helped 12 users with cooking questions and recipe modifications
                      </p>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Created "Healthy Summer Salads" collection</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Curated 8 fresh salad recipes perfect for hot weather
                      </p>
                      <span className="text-xs text-gray-400">3 days ago</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Shared cooking tips on social media</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Posted knife skills tutorial and ingredient substitution guide
                      </p>
                      <span className="text-xs text-gray-400">4 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
