import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles'
import { isAuthenticated, isAuthenticatedAdmin } from '../../auth'

export default function Nabar(){
    return(
        <>
            <Nav>
                <NavLink to='/home'>
                    {/* <img src={require('../../assets/Images/logo.jpg')} alt='Logo'/> */}
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-in'>
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}