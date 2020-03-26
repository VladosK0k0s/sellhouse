import React, { Component } from 'react';
import logo from './sellhouse_logo_2.png'
import './Header.scss';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='Header' >
                <NavLink to = '/'>
                    <img src={logo} alt="LOGO"/>
                </NavLink>
            </div>
        );
    }
}

export default Header;