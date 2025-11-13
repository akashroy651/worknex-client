import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';


const Root = () => {
    return (
        <div>
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;