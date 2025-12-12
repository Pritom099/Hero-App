import React from 'react';
import { Link } from 'react-router';

const ErrorApps = () => {
    return (
        <div className='flex flex-col items-center justify-center my-15'>
            <img className='h-60 mb-5' src="/App-Error.png" alt="" />
            <p className='text-3xl font-bold'>OPPS!! APP NOT FOUND</p>
            <p className='text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/' className="btn btn-primary mt-5">Go Back!</Link>
        </div>
    );
};

export default ErrorApps;