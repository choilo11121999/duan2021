import React, { Component, useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {FiHome} from "react-icons/fi";
import '../../css/Admin.css';
const Navbar = ({ getCollapsed }) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    getCollapsed(collapsed);
  }, [collapsed]);
    return (
        <>
            <div className={collapsed ? "side-nav active" : "side-nav"}>
                <div id={collapsed ? "show-nav" : "hide-nav"}>
                    <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)}/>
                </div>
                <ul className="menu-list-link">
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/cinames"><FiHome/>Cinames</NavLink> </li>
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/products"><FiHome/>Products</NavLink> </li>
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/show"><FiHome/>Show</NavLink> </li>
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/rooms"><FiHome/>Rooms</NavLink> </li>
                </ul>
            </div>
        </>
    );
}
export default Navbar;  