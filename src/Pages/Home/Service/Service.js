import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/checkout/${id}`)
    };

    return (
        <div className='service'>
            <img className='img-fluid w-100 img-border' src={img} alt="" />
            <h2>{name} </h2>

            <p><small>{description}</small></p>
            <p className='text-white'>Price: {price} BDT</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary checkout-btn'>Checkout {name}</button>
        </div>
    );
};

export default Service;