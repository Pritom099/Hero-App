import React from 'react';
import useApps from '../hooks/useApp';
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import LoadingSpinner from '../Components/LoadingSpinner';


const Home = () => {
    const { products, loading } = useApps()
    // console.log(products)
    const featuredApps = products.slice(0, 8);
    return (
        <div>
            <div className='flex flex-col items-center justify-center my-5'>
                <div className='mb-6 flex flex-col items-center justify-center'>
                    <h1 className='text-6xl font-bold'><span className='ml-18'>We Build</span> <br></br><span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='mt-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br><span className='md:ml-20'>Our goal is to turn your ideas into digital experiences that truly make an impact.</span></p>
                    <div className='mt-5 space-x-8'>
                        <Link to='https://play.google.com/store/apps?hl=en' target='_blank' className="btn btn-outline"><img className='h-9' src="/channels4_profile.jpg" alt="" /> Google Play</Link>
                        <Link to='https://play.google.com/store/apps?hl=en' target='_blank' className="btn btn-outline"><img className='h-6' src="/App-Store-Logo-2020.png" alt="" /> App Store</Link>
                    </div>
                </div>
                <div>
                    <img className='h-100' src="/hero.png" alt="" />
                </div>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full h-[280px] text-white flex flex-col items-center justify-center'>
                    <p className='text-3xl font-semibold mb-10'>Trusted by Millions, Built for You</p>
                    <div className='flex gap-20'>
                        <div className='space-y-2'>
                            <p>Total Downloads</p>
                            <p className='text-4xl font-semibold'>29.6M</p>
                            <p>21% More Than Last Month</p>
                        </div>
                        <div className='space-y-2'>
                            <p>Total Reviews</p>
                            <p className='text-4xl font-semibold'>906K</p>
                            <p>46% More Than Last Month</p>
                        </div>
                        <div className='space-y-2'>
                            <p>Active Apps</p>
                            <p className='text-4xl font-semibold'>132+</p>
                            <p>31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center my-10'>
                <h1 className='text-3xl font-bold mb-3'>Trending Apps</h1>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                {
                    loading ? (
                        <LoadingSpinner></LoadingSpinner>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5'>
                            {
                                featuredApps.map(product => (
                                    <AppsCard key={product.id} product={product}></AppsCard>
                                ))
                            }
                        </div>
                    )
                }

                <div className='flex items-center justify-center mt-7'>
                    <Link to='/apps' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;