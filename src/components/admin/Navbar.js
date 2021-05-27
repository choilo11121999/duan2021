import React, { Component, useEffect, useState } from 'react';
import {NavLink, Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHome, FiLogOut} from "react-icons/fi";
import '../../css/Admin.css';
const Navbar = ({ getCollapsed, setUser }) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    getCollapsed(collapsed);
  }, [collapsed]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  }
    return (
        <>
            <div className={collapsed ? "side-nav active" : "side-nav"}>
                <div className="btn" id={collapsed ? "show-nav" : "hide-nav"}>
                    <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)}/>
                </div>
                <ul className="menu-list-link">
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/cinames"><FiHome/>Cinames</NavLink> </li>
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/products"><FiHome/>Products</NavLink> </li>
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/show"><FiHome/>Show</NavLink> </li>
                    <li className="menu-item-link"><NavLink activeClassName="active-item-link" to="/admin/rooms"><FiHome/>Rooms</NavLink> </li>
                    <li className="menu-item-link"><Link to="/" onClick={handleLogout}><FiLogOut/>&nbsp; Đăng xuất</Link> </li>
                </ul>
            </div>
        </>
    );
}
export default Navbar;  