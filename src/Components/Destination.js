import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';
import maps from '../Assets/img/image 1.png'

const Destination = () => {

    const allhotels = useLoaderData();
    const hotels = allhotels[0].hotels
    console.log(hotels);
    return (
        <div className='lg:mx-20'>
            <h1 className='text-4xl font-extrabold text-neutral-700 text-left mb-10 mt-10 ml-12' >Stay in {allhotels[0].location}</h1>
            <div className='flex justify-center items-center gap-20'>
                <div className=' grid lg:grid-cols-2 justify-center items-center gap-10'>
                    {
                        hotels.map((hotel, index) => <Details hotel={hotel} key={index} ></Details>)
                    }
                </div>

                <div>
                    <img src={maps} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;