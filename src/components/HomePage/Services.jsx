import React from 'react';
import Card from '../Card/Card';
import { getServices } from '@/services/getServices';

const Services = async () => {
    const {res} = await getServices();
    return (
        <div>
            <div className='text-center space-y-4'>
                <h5 className='text-xl font-bold text-primary'>Our Service</h5>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='text-base'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    res?.length > 0 && res?.map(services => (
                        <Card key={services} services={services}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;