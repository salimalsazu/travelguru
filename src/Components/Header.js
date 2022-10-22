import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../Assets/logo/Group 1330.png"


const Header = () => {
    return (
        <div >
            <header className="p-4 text-white font-bold bg-gray-700">
                <div className="container flex justify-between h-16 mx-auto ">
                    <img src={logo} alt="" />
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <NavLink to='/' className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1  dark:border-transparent">Home</a>
                        </NavLink>

                        <NavLink to='news' className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1  dark:border-transparent">News</a>
                        </NavLink>
                        <NavLink to='destination' className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 dark:border-transparent">Destination</a>
                        </NavLink>
                        <NavLink to='/blog' className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1  dark:border-transparent">Blog</a>
                        </NavLink>
                        <NavLink to='/contact' className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1  dark:border-transparent">Contact</a>
                        </NavLink>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <NavLink to='/login' className="self-center px-8 py-3 rounded">Sign in</NavLink>
                        <NavLink to='/reg' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</NavLink>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;