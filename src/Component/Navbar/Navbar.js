import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    const {cart} = props;
    console.log(cart)
    return (
        <nav className='navbar'>
            <h1>Danger Dung</h1>
        </nav>
    );
};

export default Navbar;