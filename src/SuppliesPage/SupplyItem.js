import React, { Component } from "react";
import DIYContext from "../DIYContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class SupplyItem extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = DIYContext;

  render() {
    const { supplies = [] } = this.context;
    const { supply_id } = this.props.match.params;

    console.log(supply_id);

    return (
      <div className="supply-item">
        <h3>{this.props.supply_name}</h3>
        <p>Details: {this.props.details}</p>
        <p>Quantity: {this.props.quantity}</p>
        {/* <button>
          <Link to="/edit-supply">Edit</Link>
        </button> */}
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
