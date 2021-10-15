import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description, img, id} = service
    return (
        <div className = 'service-container pb-3'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <Link to = {`/booking/${id}`}>
            <button className = 'btn btn-outline-success'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;