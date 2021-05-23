import React, { Component } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class SupplyItem extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  

  render() {
    const { supplies = [] } = this.context;
    const { supply_id } = this.props.match.params;

    console.log(supply_id);

    return (
      <div className="supply-item">
        <h3>{this.props.supply_name}</h3>
        <div className="specs">
          <div className="specs-column">
            <p>Details: <br /> {this.props.details}</p>
          </div>
          <div className="specs-column">
            <p>Quantity: <br /> {this.props.quantity}</p>
          </div>
        </div>
        
        
        <button>
          <Link to="/edit-supply">Edit</Link>
        </button>
        <button
          type="button"
          className="delete"
          onClick={() => this.context.deleteSupply(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
