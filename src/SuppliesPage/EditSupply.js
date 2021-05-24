import React, { Component } from "react";
import config from "../config";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import ValidationError from "../ValidationError";

export default class EditSupply extends Component {
  
  constructor(props) {
    console.log("hello")
    super(props);

    this.state = {
      supply_id: props.location.supply_id,
      supply_name: {
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

  changeSupplyName(supply_name) {
    this.setState({
      supply_name: { value: supply_name, touched: true },
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

  validateSupplyName() {
    const supply_name = this.state.supply_name.value.trim();
    if (supply_name.length === 0) {
      return <p className="input-error">Supply name is required</p>;
    } else if (supply_name.length < 2) {
      return (
        <p className="input-error">
          Supply name must be at least 2 characters long
        </p>
      );
    }
  }

  validateDetails() {
    const details = this.state.details.value.trim();
    if (details.length === 0) {
      return (
        <p className="input-error">Details about the supply are required</p>
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
    if (quantity === null) {
      return <p className="input-error">Quantity is required</p>;
    }
  }

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    // console.log(currentUser);

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }

    
    const supply_id = window.location.supply_id;

    let getSupplySpecsUrl = `${config.API_ENDPOINT}/supplies/${supply_id}`;

    fetch(getSupplySpecsUrl)
      .then((getById) => getById.json())
      .then((getById) => {
        // console.log(getById)
        this.setState({
          getById: getById,
        });
        // console.log(this.state);
      })

      .catch((error) => this.setState({ error }));
  }

  // getById(event) {
  //   event.preventDefault;
    
  // }

  updateSupply(event) {
    // console.log('hello there')
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    let user_id = TokenService.getUserId();

    let { supply_name, details, quantity } = data;

    let payload = {
      user_id: user_id,
      supply_name: supply_name,
      details: details,
      quantity: quantity,
    };
    console.log(payload);

    //     console.log(this.props)

    let { supply_id } = data;
    console.log(supply_id);

    fetch(`${config.API_ENDPOINT}/supplies/${supply_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        window.location = "/supplies";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
  let showSupplySpecs = ''
    showSupplySpecs =  

    
       
        <div className="edit-supply" >
        
            {/* <h3>COMING SOON</h3> */}
          <h3>Update this supply.</h3>
          <form className="edit-supply-form" onSubmit={this.updateSupply}>
            <label htmlFor="supply_name">supply name:</label>
            <input
              type="text"
              id="supply_name"
              name="supply_name"
              defaultValue = {this.state.getById.supply_name}
              onChange={(e) => this.changeSupplyName(e.target.value)}
              required
            />
            {this.state.supply_name.touched && (
              <ValidationError message={this.validateSupplyName()} />
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
              <NavLink to="/supplies">
                <button>Cancel</button>
              </NavLink>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
    
  

  return (
      <div>
          { showSupplySpecs }
      </div>
  )
}
}
