import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center my-5'>
                <div className='mb-6 flex flex-col items-center justify-center'>
                    <h1 className='text-6xl font-bold'><span className='ml-18'>We Build</span> <br></br><span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='mt-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br><span className='md:ml-20'>Our goal is to turn your ideas into digital experiences that truly make an impact.</span></p>
                    <div className='mt-5 space-x-8'>
                        <button className="btn btn-outline">Google Play</button>
                        <button className="btn btn-outline">App Store</button>
                    </div>
                </div>
                <div>
                    <img className='h-100' src="/public/hero.png" alt="" />
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
        </div>
    );
};

export default Home;