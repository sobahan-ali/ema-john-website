import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <img src= {logo} alt="" />
            <div className='nav-info'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/order">Order</a>
                <a href="/order riview">Order Review</a>
                <a href="/inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Header;