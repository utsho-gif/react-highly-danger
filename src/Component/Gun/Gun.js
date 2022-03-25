import React from 'react';
import './Gun.css'

const Gun = (props) => {
    const {name, img, bullet, capacity, action, price} = props.gun;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h2>Name: {name}</h2>
            <p>Bullet Type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button>Cart</button>
                <h2>$ {price}</h2>
            </div>
        </div>
    );
};

export default Gun;