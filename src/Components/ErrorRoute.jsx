import React from 'react';
import { Link, useRouteError } from 'react-router';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ErrorRoute = () => {
    const error = useRouteError();
    return (
        <div className='py-24 text-center bg-white'>
                <div className='lg:size-2/4 mx-auto'>
                    <DotLottieReact
                    src="https://lottie.host/f940b97b-9fd8-40a9-b466-d5f856261dca/yhhxfVovQC.lottie"
                    loop
                    autoplay
                    />
                </div>
                

                <h1 className='mb-8 text-7xl font-thin text-gray-900'>
                    {error?.status || 404}
                </h1>
                <p className='mb-3 md:mb-8 text-xl font-bold text-gray-900 md:text-2xl'>
                    {error?.error?.message || 'Something Went Wrong!'}
                </p>
                <Link className="btn bg-gray-300 rounded-full text-[#ff5835] text-xl font-bold" to='/'>
                    Go to Homepage
                </Link>
            </div>
    );
};

export default ErrorRoute;