import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Interface.css'

const Interface = () => {
    const [guns, setGuns] = useState([])

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))

    },[])
    return (
        <div className='card-container'>
            {
                guns.map(gun => console.log(gun))
            }
            {
                guns.map(gun => <Gun gun = {gun} key = {gun.id}></Gun>)
            }
        </div>
    );
};

export default Interface;