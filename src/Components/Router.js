import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Blog from './Blog';
import Booking from './Booking';
import Contact from './Contact';
import Destination from './Destination';
import Destinations from './Destinations';
import Home from './Home';
import Login from './Login';
import Main from './Main';
import News from './News';
import Reg from './Reg';



export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/destination/',
                element: <Destinations></Destinations>
            },
            {
                path: '/destination/:name',
                loader: ({ params }) => fetch(`https://tarvelguru.vercel.app/locations/${params.name}`),
                element: <Destination></Destination>
            },
            {
                path: '/booking/:name',
                loader: ({ params }) => fetch(`https://tarvelguru.vercel.app/hotel/${params.name}`),
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            }

        ]
    }

])


const Router = () => {

    return (
        <div>



        </div>
    );
};

export default Router;