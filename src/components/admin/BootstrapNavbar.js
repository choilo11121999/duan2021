import React, { Component, useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import Products from "./products/index";
import Shows from "./shows/index";
import Admin from "./admin";
import '../../css/Admin.css';

const BootstrapNavbar = ({ getCollapsed, setUser }) => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        getCollapsed(collapsed);
    }, [collapsed]);

    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        window.location.href="/user/login"
    }
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Navbar.Brand href="/home">CGV Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-link">
                        <NavLink activeClassName="active-link-admin mr-3" to="/admin/products">Products{ }</NavLink>
                        <NavLink activeClassName="active-link-admin ml-3" to="/admin/shows">Shows{ }</NavLink>
                    </Nav>
                    <Form inline>
                        <Button variant="warning" href="/user/login" onClick={handleLogout}
                            ><i className="fa fa-sign-out admin-signout" aria-hidden="true">&nbsp; Đăng xuất</i></Button>
                    </Form> 
                </Navbar.Collapse>
            </Navbar><br />
            <Switch>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route path="/admin/products">
                    <Products />
                </Route>
                <Route path="/admin/shows">
                    <Shows />
                </Route>
            </Switch>
        </>
    );
}
export default BootstrapNavbar; 
 