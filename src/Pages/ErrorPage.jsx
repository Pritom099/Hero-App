import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center my-20'>
                <img className='h-60 mb-5' src="/public/error-404.png" alt="" />
                <p className='text-3xl font-bold'>Oops, page not found!</p>
                <p className='text-gray-600'>The page you are looking for is not available.</p>
                <Link to='/' className="btn btn-primary mt-5">Oo Back!!</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;