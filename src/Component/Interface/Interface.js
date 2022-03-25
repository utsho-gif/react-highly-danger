import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import Navbar from '../Navbar/Navbar'
import './Interface.css'

const Interface = () => {
    const [guns, setGuns] = useState([])
    const [cart, setCart] = useState([])


    const handleCart = (gun) => {
        setCart([...cart, gun])
    }

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))

    },[])
    return (
        <div>
            <div>
                <Navbar cart = {cart}></Navbar>
            </div>
            <div className='card-container'>
              {
                guns.map(gun => <Gun gun = {gun} key = {gun.id} handleCart = {handleCart}></Gun>)
              }
            </div>
        </div>
    );
};

export default Interface;