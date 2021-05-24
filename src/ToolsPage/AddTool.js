import React, { Component } from "react";
import config from "../config";
import { NavLink } from 'react-router-dom'
import TokenService from "../services/token-service";
import ValidationError from '../ValidationError'

export default class AddTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tool_name: {
        value: "",
        touched: false,
      },
      details: {
        value: "",
        touched: false,
      },
      quantity: {
        value: "",
        touched: false,
      },
    };
  }

  changeToolName(tool_name) {
    this.setState({
      tool_name: { value: tool_name, touched: true },
    });
  }

  changeDetails(details) {
    this.setState({
      details: { value: details, touched: true },
    });
  }

  changeQuantity(quantity) {
    this.setState({
      quantity: { value: quantity, touched: true },
    });
  }

  validateToolName() {
    const tool_name = this.state.tool_name.value.trim();
    if (tool_name.length === 0) {
      return <p className="input-error">Tool name is required</p>;
    } else if (tool_name.length < 2) {
      return (
        <p className="input-error">
          Tool name must be at least 2 characters long
        </p>
      );
    }
  }

  validateDetails() {
    const details = this.state.details.value.trim();
    if (details.length === 0) {
      return (
        <p className="input-error">Details about the tool are required</p>
      );
    } else if (details.length < 2) {
      return (
        <p className="input-error">
          Details must be at least 2 characters long
        </p>
      );
    }
  }

  validateQuantity() {
    const quantity = this.state.quantity.value.trim();
    if (quantity.length === 0) {
      return <p className="input-error">Quantity is required</p>;
    }
  }

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    // console.log(currentUser);

    //if the user is not logged in, send to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }
  }

  addTool(e) {
    e.preventDefault();

    const data = {};

    const formData = new FormData(e.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    let user_id = TokenService.getUserId();

    let { tool_name, details, quantity } = data;

    let payload = {
      user_id: user_id,
      tool_name: tool_name,
      details: details,
      quantity: quantity,
    }
    console.log(payload)

    fetch(`${config.API_ENDPOINT}/tools`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "content-type": "application/json" },
      })

        .then((res) => res.json())
        .then((resJson) => {
          window.location = "/tools";
        })
        .catch((err) => {
          console.log(err);
        })
    
  }

  render() {
    return (
      <div className="add-tool">
        <h3>Add a tool to your inventory!</h3>
        <form className="add-tool-form" onSubmit={this.addTool}>
          <label htmlFor="tool_name">tool name:</label>
          <input
            type="text"
            id="tool_name"
            name="tool_name"
            onChange={(e) => this.changeToolName(e.target.value)}
            required
          />
          {this.state.tool_name.touched && (
            <ValidationError message={this.validateToolName()} />
          )}
          <label htmlFor="details">details:</label>
          <input
            type="text"
            id="details"
            name="details"
            onChange={(e) => this.changeDetails(e.target.value)}
            required
          />
          {this.state.details.touched && (
            <ValidationError message={this.validateDetails()} />
          )}
          <label htmlFor="quantity">quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={(e) => this.changeQuantity(e.target.value)}
            required
          />
          {this.state.quantity.touched && (
            <ValidationError message={this.validateQuantity()} />
          )}
          <div className="buttons">
            <NavLink to="/tools">
              <button>Cancel</button>
            </NavLink>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
