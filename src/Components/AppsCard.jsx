import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({product}) => {
    const{image, title, companyName, ratingAvg, downloads, id} = product
    return (
        <Link to={`/product/${id}`} className="card bg-base-100  shadow-xl">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {companyName} - {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="bg-gray-200 badge badge-outline p-3 text-green-600 font-bold border-none"><img className='h-4' src="/public/icon-downloads.png" alt="" />{downloads}M</div>
                    <div className="bg-orange-200 badge badge-outline p-3 text-orange-600 font-bold border-none"><img className='h-4' src="/public/icon-ratings.png" alt="" />{ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export default AppsCard;