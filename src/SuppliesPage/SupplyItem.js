import React, { Component } from 'react';
import DIYContext from '../DIYContext';
import { Link } from "react-router-dom";

export default function SupplyItem(props) {
    return (
        <div className="supply-item">
            <h3>{props.supply_name}</h3>
            <p>Details: {props.details}</p>
            <p>Quantity: {props.quantity}</p>
            <button>
            <Link to="/edit-supply">Edit</Link>
            </button>
            <button>Delete</button>
        </div>

    )
}