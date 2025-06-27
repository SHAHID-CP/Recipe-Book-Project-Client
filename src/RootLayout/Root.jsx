import React from 'react';
import { Outlet } from 'react-router';
import Foooter from '../Components/Foooter/Foooter';
import { ToastContainer } from 'react-toastify';
import Navbarr from '../Components/Navbar/Navbarr';

const Root = () => {
    return (
        <>
            <Navbarr></Navbarr>
            <div className='min-h-[calc(100vh-330px)]'>
                <div className='mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                        <Outlet></Outlet>
                </div>
            </div>
            <ToastContainer />
            <Foooter></Foooter>
        </>
    );
};

export default Root;