import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;

    return (
        <Navbar className="light-bg" sticky="top" expand="lg">
            <Container>
                <div><img
                    src={logo}
                    width="100"
                    height="60"
                    className="d-inline-block align-top"
                    alt="logo"
                /></div>
                <Navbar.Toggle className="border-0 text-white" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto d-lg-flex align-items-center">
                        <NavLink className="navlinks text-white me-3 pb-2" to='/home'>HOME</NavLink>
                        <NavLink className="navlinks text-white me-3 pb-2" to='/about'>ABOUT</NavLink>
                        {
                            !user ? <NavLink className="navlinks text-white me-3 pb-2" to='/signin'>SIGN IN</NavLink> :
                                <div className="d-flex align-items-center">
                                    <p className="text-white pb-2 mt-3">{!user.displayName ? user.email : user.displayName}</p>
                                    <button className="border-0 light-bg text-white fw-bold ms-3 pb-2" onClick={logOut}>Logout</button>
                                </div>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;