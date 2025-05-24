import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../../Context/AuthContext';
import LoadingEle from '../LoadingEle';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user,logoutUser,loading}= use(AuthContext)
    const navi= useNavigate();
    
    // const user=true;
    const userPhoto=user?.photoURL;
    const userNamed=user?.displayName;

    if(loading){
        <LoadingEle></LoadingEle>
        return;
    }


    const hundle = ()=>{
        toast("Log out successfully");
        logoutUser() ;
    }
    
    const navihundle= ()=>{
        navi('/login') ;
    }
    const naviRegist= ()=>{
        navi('/register');
    }

    return (
        <div className='navbar p-0 bg-white shadow-sm  mx-auto px-8 md:px-12 lg:px-16 xl:px-24 py-3'>
        <div className='navbar-start'>
        <div className='dropdown'>
            <div
            tabIndex={0}
            role='button'
            className='cursor-pointer mr-2 lg:hidden'
            >
            <svg
                xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' >
                {' '}
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16'
                />{' '}
            </svg>
            </div>





            <div
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
                <ul>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/' >
                Home
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/allrecipe' >
                All recipe
                </NavLink>
            </li>
            {user && <>
                <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/addrecipe' >
                Add Recipe
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/myrecipes' >
                My Recipes
                </NavLink>
            </li>
                
            </>}
            </ul>
            {
                !user && <button onClick={naviRegist} className='btn bg-gray-300 text-[#ff5835] mb-2'>Register</button>
            }
            <button onClick={user ? hundle : navihundle} className='btn btn-primary'>{user? 'Logoout' : 'Login'}</button>
            
            </div>

            
        </div>

        <Link to='/' >
            <Logo></Logo>
        </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-xl font-medium'>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/' >
                Home
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/allrecipe' >
                All Recipe
                </NavLink>
            </li>
            {user && <>
                <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/addrecipe' >
                Add Recipe
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/myrecipes' >
                My Recipes
                </NavLink>
            </li>
                
            </>}
        </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
            {
                !user && <button onClick={naviRegist} className="btn bg-gray-300 rounded-full border-none text-[#ff5835] text-xl font-bold mr-2">Register</button>
            }
            <button onClick={user ? hundle : navihundle} className="btn bg-[#ff5835] rounded-full border-none text-gray-300 text-xl font-bold">{user? 'Logoout' : 'Login'}</button>
        </div>


                <div className={`not-lg:navbar-end ${user ? 'flex' : 'hidden'}`}>
                <Link className='my-anchor-element'>
                <div className={`avatar online sm:ml-2 ${user ? 'flex' : 'hidden'} `}>
                <div className={`w-10 rounded-full border-2 border-[#ff5835] ${user ? 'block' : 'hidden'}  `} >
                    
                    {
                        userPhoto && <img src={userPhoto} alt='No photo' />
                    }
                    
                </div>
                </div>
                <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                    {
                        userNamed 
                    }
                </Tooltip>
                </Link>
                </div>

    </div>
    );
};

export default Navbar;