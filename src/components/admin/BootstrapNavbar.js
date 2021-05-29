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
            <div className="row">
                <div className="col-md-12">
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="/home">CGV Admin</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/admin/products">Products</Nav.Link>
                                <Nav.Link href="/admin/shows">Shows</Nav.Link>
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
                </div>
            </div>
        </>
    );
}
export default BootstrapNavbar; 
 