import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch('https://tarvelguru.vercel.app/location')
            .then(res => res.json())
            .then(data => setLocation(data));
    }, [])


    return (
        <div className='bg-img flex flex-col lg:flex-row justify-center items-center px-10 gap-5 lg:-mt-40'>
            <div className='text-white w-2/3 flex flex-col justify-start'>
                <h1 className='text-6xl font-extrabold'>COX BAZAR</h1>
                <p className='font-extralight text-justify mt-10' >Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                <button className='bg-yellow-300 w-40 py-2 rounded-lg mt-5 text-gray-800 font-bold flex justify-center items-center' >Booking <span> <FaArrowRight className='ml-4'></FaArrowRight></span> </button>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-0 ' >

                {
                    location.map(locations => <>
                        <div>
                            <Link to={`destination/${locations.location}`}>
                                <img className='img' src={locations.image} alt="" />
                                <h1 className='text-white text-2xl font-bold -mt-32'>{locations.location}</h1>
                            </Link>
                        </div>
                    </>)
                }

            </div>
        </div>
    );
};

export default Home;