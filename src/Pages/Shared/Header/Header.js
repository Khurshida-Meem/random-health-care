import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <Navbar className="light-bg" expand="lg">
            <Navbar sticky="top" />
            <Container>
                <Navbar.Brand href="#"><img
                    src={logo}
                    width="100"
                    height="60"
                    className="d-inline-block align-top"
                    alt="logo"
                /></Navbar.Brand>
                <Navbar.Toggle className="border-0 text-white" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto">
                        <NavLink className="navlinks text-white me-3 pb-2" to='/home'>HOME</NavLink>
                        <NavLink className="navlinks text-white me-3 pb-2" to='/services'>SERVICES</NavLink>
                        <NavLink className="navlinks text-white me-3 pb-2" to='/about'>ABOUT</NavLink>
                        <NavLink className="navlinks text-white me-3 pb-2" to='/blogs'>BLOGS</NavLink>
                        <NavLink className="navlinks text-white me-3 pb-2" to='/signIn'>SIGN IN</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;