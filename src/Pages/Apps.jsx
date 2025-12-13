import React, { useState } from 'react';
import useApps from '../hooks/useApp';
import AppsCard from '../Components/AppsCard';
import ErrorApps from '../Components/ErrorApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Apps = () => {
    const [search, setSearch] = useState('')
    const { products, loading } = useApps()

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? products.filter(product => product.companyName.toLocaleLowerCase().includes(term)) : products

    if (loading) {
        return <LoadingSpinner />
    }

    if (!searchedApps.length) {
        return (
            <ErrorApps onBack={() => setSearch('')}></ErrorApps>
        )
    }

    return (
        <div className='mx-10'>
            <div className='flex flex-col  items-center '>
                <h1 className='text-4xl font-bold mb-2'>Our All Applications</h1>
                <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='my-7'>
                    <p className='text-xl font-semibold'>({searchedApps.length}) Apps Found</p>
                </div>
                <div>
                    <label className="input border-2 border-blue-400">
                        <input value={search} onChange={e => setSearch(e.target.value)} type='search' placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <div>
                {
                    loading ? (
                        <LoadingSpinner></LoadingSpinner>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            {
                                searchedApps.map(product => (
                                    <AppsCard key={product.id} product={product}></AppsCard>
                                ))
                            }
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Apps;