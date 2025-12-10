import React from 'react';
import useApps from '../hooks/useApp';
import AppsCard from '../Components/AppsCard';

const Apps = () => {
    const {products} = useApps()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5'>
            {
                products.map(product => (
                    <AppsCard key={product.id} product={product}></AppsCard>
                ))
            }
        </div>
    );
};

export default Apps;