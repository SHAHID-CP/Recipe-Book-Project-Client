import React, { use, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import { AiOutlineMenu } from 'react-icons/ai'
import { AuthContext } from '../../Context/AuthContext';
import LoadingEle from '../LoadingEle';
import { toast } from 'react-toastify';
const Navbarr = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user,logoutUser,loading}= use(AuthContext)
    const navi= useNavigate();
    const userPhoto=user?.photoURL;
    

    


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
    if(loading){
        <LoadingEle></LoadingEle>
        return;
    }

    return (
        <div className='navbar p-0  z-50 backdrop-blur-lg bg-white/30 shadow-md  mx-auto px-8 md:px-12 lg:px-16 xl:px-24 py-3 sticky top-0'>
        <div className='navbar-start'>
        
        
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

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/about' >
                About
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/contact' >
                Contact
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/support' >
                Support
                </NavLink>
            </li>
            
        </ul>
        </div>

        <div className="navbar-end ">
            <div className='relative'>
                <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'> 
                    {/* Avatar */}
                    <img
                        className='rounded-full'
                        referrerPolicy='no-referrer'
                        src={userPhoto}
                        alt='profile'
                        height='40'
                        width='40'
                    />
                    </div>
                </div>
                </div>
                {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[20vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                    <Link
                        to='/'
                        className='block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                        className='block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                        About
                    </Link>
                    <Link
                        to='/contact'
                        className='block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                        Contact
                    </Link>
                    <Link
                        to='/support'
                        className='block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                        Support
                    </Link>

                    {user ? (
                        <>
                        <Link
                            to='/dashboard'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Dashboard
                        </Link>
                        <div
                            onClick={hundle}
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                            Logout
                        </div>
                        </>
                    ) : (
                        <>
                        <Link
                            to={navihundle}
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Login
                        </Link>
                        <Link
                            to={naviRegist}
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Sign Up
                        </Link>
                        </>
                    )}
                    </div>
                </div>
                )}
            </div>
        </div>


                

    </div>
    );
};

export default Navbarr;