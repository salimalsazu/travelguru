import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Main = () => {

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;