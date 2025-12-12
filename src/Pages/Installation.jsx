import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installation, setInstallation] = useState([])
    const[sortOrder, serSortOrder] = useState('none')
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if (savedList) setInstallation(savedList)
    })


    const handleRemove = id => {
        const existingList = JSON.parse(localStorage.getItem("installation"))
        let updatedList = existingList.filter(p => p.id !== id)
        //for ui update
        setInstallation(prev => prev.filter(p => p.id !== id))
        localStorage.setItem("installation", JSON.stringify(updatedList))
    }

    return (
        <div className='mx-10'>
            <div className='my-5 mb-10 flex flex-col items-center'>
                <h1 className='font-bold text-4xl mb-2'>Your Installed Apps</h1>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='my-3 flex items-center justify-between'>
                <div>
                    <p className='text-xl font-semibold'>({installation.length}) Apps Found</p>
                </div>
                <div>
                    <label className='form-control w-full max-w-xs'>
                        <select className='select select-bordered border-blue-400'>
                           <option value="none">Short by price</option>
                           <option value="">Low-&gt;High</option>
                           <option value="">High-&gt;Low</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='space-y-3'>
                {
                    installation.map(p => (
                        <div key={p.id} className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img className='w-40 h-28 object-cover p-2 rounded-2xl'
                                    src={p.image}
                                    alt={p.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{p.companyName} - {p.title}</h2>
                                <div className='flex gap-8'>
                                    <div className='flex items-center justify-center gap-1'>
                                        <img className='h-3' src="/public/icon-downloads.png" alt="" />
                                        <p className='font-semibold text-green-600'>{p.downloads}M</p>
                                    </div>
                                    <div className='flex items-center justify-center gap-1'>
                                        <img className='h-3' src="/public/icon-ratings.png" alt="" />
                                        <p className='font-semibold text-amber-600'>{p.ratingAvg}</p>
                                    </div>
                                    <div>
                                        <p>300 MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pr-4 flex items-center gap-3">
                                <button onClick={() => handleRemove(p.id)} className="btn btn-success text-white">Uninstall</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Installation;