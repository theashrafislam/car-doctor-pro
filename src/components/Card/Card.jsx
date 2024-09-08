import Image from 'next/image';
import React from 'react';

const Card = ({services}) => {
    const {title, img, price} = services || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <Image src={img} alt={title} height={100} width={500}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p className='text-primary font-bold'>Price: ${price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;