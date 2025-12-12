import React, { useState } from 'react';
import useApps from '../hooks/useApp';
import { useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const AppsDetail = () => {
    const { id } = useParams();
    const { products, loading } = useApps();
    const [installed, setInstalled] = useState(false);
    // console.log(products)
    const product = products.find(p => String(p.id) === id);
    if (loading) return <p>Loading...</p>
    const { image, title, companyName, ratingAvg, downloads, reviews, description } = product || {}

    const handleAddtoInstallation = () => {
        const existingList = JSON.parse(localStorage.getItem("installation"))
        let updatedList = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === product.id)
            if (isDuplicate) {
                alert("SORRY, This is already installed!!!")
                return;
            }
            updatedList = [...existingList, product]
        }
        else {
            updatedList.push(product)
        }
        localStorage.setItem("installation", JSON.stringify(updatedList))

        // button update
        setInstalled(true)
    }

    const chartData = [
        { name: "Ratings", value: ratingAvg }
    ];


    return (
        <div className='mx-10'>
            <div className="card card-side bg-base-100 border-b border-gray-400">
                <figure>
                    <img className='h-48 rounded-sm'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <div className='border-b border-gray-400 pb-3'>
                        <h1 className='text-xl font-semibold'>{companyName} - {title}</h1>
                        <p className='text-gray-600'>Developed by <span className='text-purple-700'> productive.io</span></p>
                    </div>
                    <div className='flex gap-15 border-b border-gray-400 pb-3'>
                        <div>
                            <img className='h-6' src="/public/icon-downloads.png" alt="" />
                            <p>Downloads</p>
                            <p className='text-xl font-bold'>{downloads}M</p>
                        </div>
                        <div>
                            <img className='h-6' src="/public/icon-ratings.png" alt="" />
                            <p>Average Ratings</p>
                            <p className='text-xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img className='h-6' src="/public/icon-review.png" alt="" />
                            <p>Total Reviews</p>
                            <p className='text-xl font-bold'>{reviews}K </p>
                        </div>
                    </div>
                    <div className="card-actions mt-2">
                        <button onClick={handleAddtoInstallation} className="btn btn-success text-white" >{installed ? "Installed ✓" : "Install Now (300MB)"}</button>
                    </div>
                </div>
            </div>
            {/* chart */}
            <div className='border-b border-gray-400 pb-5 mt-6'>
                <h1 className='font-bold text-xl mb-3'>Ratings</h1>
                <div className='bg-base-100 border rounded-xl p-4 h-80'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis width="auto" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className=' my-4'>
                <h1 className='mb-2 font-bold text-xl'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetail;