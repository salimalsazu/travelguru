import React from 'react';

const Details = ({ hotel }) => {
    console.log(hotel);

    const { baths, bedroom, beds, cancellation, facilities, guest, image, price, rating } = hotel;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 ">
            <div>
                <img src={image} alt="" className="object-cover object-center w-full rounded-md  h-72 dark:bg-gray-500" />
            </div>
            <div>
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{hotel.hotel}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{facilities}</h2>
                </div>
                <div className='flex gap-1 mb-2 text-red-400 ' >
                    <p>Baths:{baths}</p>
                    <p>Bedroom: {bedroom}</p>
                    <p>Beds: {beds}</p>
                    <p>Guest: {guest}</p>
                </div>
                <div className='text-left'>
                    <p className='text-gray-500 font-bold' >{cancellation}</p>
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-700 font-bold'>Price: {price} <span className='text-gray-500 font-extralight' >/night</span> </p>
                    <p>Ratings: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;