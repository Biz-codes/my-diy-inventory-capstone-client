import React from 'react';

export default function SupplyItem(props) {
    return (
        <div className="supply-item">
            <h3>{props.supply_name}</h3>
            <p>Details: {props.details}</p>
            <p>Quantity: {props.quantity}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>

    )
}