import React from 'react';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import { Outlet  } from "react-router-dom";
const Main = () => {
    return (
        <div>
             
            <Header></Header>
             <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;