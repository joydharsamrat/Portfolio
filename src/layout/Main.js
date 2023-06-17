import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;