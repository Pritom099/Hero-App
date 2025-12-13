import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col items-center justify-center my-20'>
            <img className='h-20 animate-spin mb-2' src="/public/logo.png" alt="" />
            <p className='text-3xl font-semibold'>Loading.....</p>
        </div>
    );
};

export default LoadingSpinner;