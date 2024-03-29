import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://limitless-island-29520.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id = 'services'>
            <h1 className = 'my-5'>OUR SERVICES</h1>
            <div className = 'services-container'>
            {
                services.map(service => <Service
                key = {service.id}
                service = {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;