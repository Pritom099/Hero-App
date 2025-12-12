import React from 'react';
import useApps from '../hooks/useApp';
import { useParams } from 'react-router';


const AppsDetail = () => {
    const { id } = useParams();
    const { products, loading } = useApps();
    // console.log(products)
    const product = products.find(p => String(p.id) === id);
    if (loading) return <p>Loading...</p>
    const { image, title, companyName, ratingAvg, downloads, reviews, description } = product || {}

    const handleAddtoInstallation = () => {
        const existingList = JSON.parse(localStorage.getItem("installation"))
        let updatedList = []
        if(existingList){
            const isDuplicate = existingList.some( p => p.id === product.id)
            if(isDuplicate){
                alert("SORRY, This is already installed!!!")
            }
            else{
                updatedList = [...existingList, product]
            }
        }
        else{
            updatedList.push(product)
        }
        localStorage.setItem("installation",JSON.stringify(updatedList))
    }


    return (
        <div>
            <div className="card card-side bg-base-100 border-b border-gray-400 mx-10">
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
                        <button onClick={handleAddtoInstallation} className="btn btn-success text-white">Install Now (300MB)</button>
                    </div>
                </div>
            </div>
            <div className='mx-10 my-4'>
                <h1 className='mb-2 font-bold'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetail;