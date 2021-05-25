import React, { Component } from "react";
import config from "../config";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import ValidationError from "../ValidationError";

export default class EditProject extends Component {
  // constructor(props) {
  //   console.log("hello");
  //   super(props);


      // console.log(props.location.project_id)
    
    // this.state = {
      state = {
  

      project_name: {
        value: "",
        touched: false,
      },
      supplies_needed: {
        value: "",
        touched: false,
      },
      tools_needed: {
        value: "",
        touched: false,
      },
    };
  // }

  changeProjectName(project_name) {
    this.setState({
      project_name: { value: project_name, touched: true },
    });
  }

  changeSuppliesNeeded(supplies_needed) {
    this.setState({
      supplies_needed: { value: supplies_needed, touched: true },
    });
  }

  changeToolsNeeded(tools_needed) {
    this.setState({
      tools_needed: { value: tools_needed, touched: true },
    });
  }

  validateProjectName() {
    const project_name = this.state.project_name.value.trim();
    if (project_name.length === 0) {
      return <p className="input-error">Project name is required</p>;
    } else if (project_name.length < 2) {
      return (
        <p className="input-error">
          Project name must be at least 2 characters long
        </p>
      );
    }
  }

  validateSuppliesNeeded() {
    const supplies_needed = this.state.supplies_needed.value.trim();
    if (supplies_needed.length === 0) {
      return (
        <p className="input-error">Supplies needed are required</p>
      );
    } else if (supplies_needed.length < 2) {
      return (
        <p className="input-error">
          Supplies needed must be at least 2 characters long
        </p>
      );
    }
  }

  validateToolsNeeded() {
    const tools_needed = this.state.tools_needed.value.trim();
    if (tools_needed.length === 0) {
      return (
        <p className="input-error">Supplies needed are required</p>
      );
    } else if (tools_needed.length < 2) {
      return (
        <p className="input-error">
          Supplies needed must be at least 2 characters long
        </p>
      );
    }
  }


  componentDidMount() {
    // let currentUser = TokenService.getUserId();
    // console.log(currentUser);

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }

    let project_id = this.props.location.project_id;

    // let project_id = this.props.match.params.project_id

    let getSupplySpecsUrl = `${config.API_ENDPOINT}/supplies/${project_id}`

    fetch(getSupplySpecsUrl)
      .then(res => res.json())
      .then(({project_name, supplies_needed, tools_needed}) => {
        this.setState({
          project_name: {value: project_name, touched: this.state.project_name.touched}, 
          supplies_needed: {value: supplies_needed, touched: this.state.supplies_needed.touched},
          tools_needed: {value: tools_needed, touched: this.state.tools_needed.touched},
        })
      })

      .catch((error) => this.setState({ error }));
  }

  

  updateSupply = (event) => {
    // console.log('hello there')
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    let user_id = TokenService.getUserId();

    let { project_name, supplies_needed, tools_needed } = data;

    let payload = {
      user_id: user_id,
      project_name: project_name,
      supplies_needed: supplies_needed,
      tools_needed: tools_needed,
    };
    console.log(payload);

    //     console.log(this.props)


    fetch(`${config.API_ENDPOINT}/supplies/${this.props.location.project_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      // .then((response) => response.json())
      .then(() => {
        // window.location = "/supplies";
        this.props.history.push('/supplies')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let showSupplySpecs = "";
    showSupplySpecs = (
      <div className="edit-supply">
        {/* <h3>COMING SOON</h3> */}
        <h3>Update this supply.</h3>
        <form className="edit-supply-form" onSubmit={this.updateSupply}>
          <label htmlFor="project_name">supply name:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            value={this.state.project_name.value}
            onChange={(e) => this.changeProjectName(e.target.value)}
            required
          />
          {this.state.project_name.touched && (
            <ValidationError message={this.validateProjectName()} />
          )}
          <label htmlFor="supplies_needed">supplies_needed:</label>
          <input
            type="text"
            id="supplies_needed"
            name="supplies_needed"
            value={this.state.supplies_needed.value}
            onChange={(e) => this.changeSuppliesNeeded(e.target.value)}
            required
          />
          {this.state.supplies_needed.touched && (
            <ValidationError message={this.validateSuppliesNeeded()} />
          )}
          <label htmlFor="tools_needed">tools_needed:</label>
          <input
            type="number"
            id="tools_needed"
            name="tools_needed"
            defaultValue={this.state.tools_needed.value}
            onChange={(e) => this.changeToolsNeeded(e.target.value)}
            required
          />
          {this.state.tools_needed.touched && (
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
    );

    return <div>{showSupplySpecs}</div>;
  }
}
