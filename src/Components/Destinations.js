import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch('https://tarvelguru.vercel.app/location')
            .then(res => res.json())
            .then(data => setLocation(data));
    }, [])

    return (
        <div>
            <div className='flex justify-center items-center gap-5 mt-10' >

                {
                    location.map(locations => <>
                        <div >
                            <Link to={`/destination/${locations.location}`}>
                                <h1 className='text-white text-2xl font-bold bg-gray-600 px-10 py-2 rounded-lg'>{locations.location}</h1>
                            </Link>
                        </div>
                        <div>
                            
                        </div>
                    </>)
                }

            </div>

        </div>
    );
};

export default Destinations;