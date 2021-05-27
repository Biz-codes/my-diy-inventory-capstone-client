import React, { Component } from "react";
import config from "../config";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import ValidationError from "../ValidationError";
import { faSave, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class EditTool extends Component {
  // constructor(props) {
  //   console.log("hello");
  //   super(props);


      // console.log(props.location.tool_id)
    
    // this.state = {
      state = {
  

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
  // }

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
    // let currentUser = TokenService.getUserId();
    // console.log(currentUser);

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }

    let tool_id = this.props.location.tool_id;

    // let tool_id = this.props.match.params.tool_id

    let getToolSpecsUrl = `${config.API_ENDPOINT}/tools/${tool_id}`

    fetch(getToolSpecsUrl)
      .then(res => res.json())
      .then(({tool_name, details, quantity}) => {
        this.setState({
          tool_name: {value: tool_name, touched: this.state.tool_name.touched}, 
          details: {value: details, touched: this.state.details.touched},
          quantity: {value: quantity, touched: this.state.quantity.touched},
        })
      })

      .catch((error) => this.setState({ error }));
  }

  

  updateTool = (event) => {
    // console.log('hello there')
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.target);

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
    };
    console.log(payload);

        // console.log(this.props)


    fetch(`${config.API_ENDPOINT}/tools/${this.props.location.tool_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      // .then((response) => response.json())
      .then(() => {
        window.location = "/tools";
        // this.props.history.push('/tools')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let showToolSpecs = "";
    showToolSpecs = (
      <div className="edit-tool">
        
        
        <form className="edit-tool-form" onSubmit={this.updateTool}>
          <h3 >Update this tool:</h3>
          <label htmlFor="tool_name">tool name:</label>
          <input
            type="text"
            id="tool_name"
            name="tool_name"
            value={this.state.tool_name.value}
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
            value={this.state.details.value}
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
            defaultValue={this.state.quantity.value}
            onChange={(e) => this.changeQuantity(e.target.value)}
            required
          />
          {this.state.quantity.touched && (
            <ValidationError message={this.validateQuantity()} />
          )}
          <div className="buttons">
          <NavLink to="/tools">
              <button>
                <FontAwesomeIcon icon={faStepBackward} /> Cancel
              </button>
            </NavLink>
            <button type="submit">
              <FontAwesomeIcon icon={faSave} /> Save
            </button>
          </div>
          <input type="submit" className="hidden"></input>
        </form>
      </div>
    );

    return <div>{showToolSpecs}</div>;
  }
}