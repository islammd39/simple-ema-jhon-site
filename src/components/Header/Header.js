import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='links'>
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/inventories">Inventories</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;