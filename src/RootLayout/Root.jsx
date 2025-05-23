import React from 'react';
import { Outlet } from 'react-router';
import Foooter from '../Components/Foooter/Foooter';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-330px)]'>
                <div className='mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                        <Outlet></Outlet>
                </div>
            </div>
            <Foooter></Foooter>
        </>
    );
};

export default Root;