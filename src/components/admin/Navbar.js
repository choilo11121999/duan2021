import React, { Component, useState } from 'react';
import {Link} from "react-router-dom";
import {FiHome} from "react-icons/fi";
import '../../css/Admin.css';
const Navbar = ({show}) => {
    return (
        <>
            <div className={show ? "side-nav active" : "side-nav"}>
                <img src="https://www.icdleurope.org/app/uploads/2019/06/Using-Databases-Icon.png"
                    alt="logo" className="logo"/>
                <ul>
                    <li><Link to="/admin/products"><FiHome/>Products</Link> </li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </>
    );
}
export default Navbar;