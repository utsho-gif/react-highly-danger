import React from 'react';
import './Gun.css'
import {FaOpencart} from 'react-icons/fa'

const Gun = (props) => {
    const {gun, handleCart} = props;
    const {name, img, bullet, capacity, action, price} = gun;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h2>Name: {name}</h2>
                <p>Bullet Type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleCart(gun)}> <FaOpencart className='icon'></FaOpencart> </button>
                <h2>${price}</h2>
            </div>
        </div>
    );
};

export default Gun;