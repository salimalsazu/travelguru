import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';


const Booking = () => {
    const bookingHotel = useLoaderData();
    console.log(bookingHotel);

    const navigate = useNavigate();
    const { hotel, image } = bookingHotel;

    return (
        <div>
            <p onClick={() => navigate(-1)} className='flex justify-end mr-10 mt-10 text-4xl' ><FaWindowClose></FaWindowClose></p>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-16 '>
                <div>
                    <img className='w-10/12' src={image} alt="" />
                </div>
                <div>
                    <div className='flex justify-center items-center '>
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-800 dark:text-gray-100">
                            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block ">Hotel Name</label>
                                    <input readOnly type="text" name="text" id="text" placeholder={hotel} className="w-full px-4 py-3 rounded-md focus:dark:border-violet-400 font-semibold text-2xl text-center" />
                                </div>
                                <div className='flex justify-between items-center gap-5'>
                                    <div>
                                        <label htmlFor="from" className="block text-start">From</label>
                                        <input type="date" name="date" id="date" placeholder="Hotel Name" className="w-full px-4 py-3 rounded-md 0 focus:dark:border-violet-400 text-black" />
                                    </div>
                                    <div>
                                        <label htmlFor="from" className="block text-start">To</label>
                                        <input type="date" name="date" id="date" placeholder="Hotel Name" className="w-full px-4 py-3 rounded-md 0 focus:dark:border-violet-400 text-black" />
                                    </div>
                                </div>

                                <button className="block w-full p-3 text-center rounded-sm text-white dark:bg-violet-400">Book Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;