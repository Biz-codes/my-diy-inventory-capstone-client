import React, { Component } from "react";
import config from "../config";
import { NavLink } from 'react-router-dom'
import TokenService from "../services/token-service";
import ValidationError from '../ValidationError'
import { faSave, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: {
        value: "",
        touched: false,
      },
      delivery_date: {
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
      instructions: {
        value: "",
        touched: false,
      },
      done: {
        value: "",
        touched: false,
      },
    };
  }

  changeProjectName(project_name) {
    this.setState({
      project_name: { value: project_name, touched: true },
    });
  }

  changeDeliveryDate(delivery_date) {
    this.setState({
      delivery_date: { value: delivery_date, touched: true },
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

  changeInstructions(instructions) {
    this.setState({
      instructions: { value: instructions, touched: true },
    });
  }

  changeDone(done) {
    this.setState({
      done: { value: done, touched: true },
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
    
  // validateSuppliesNeeded() {
  //   const supplies_needed = this.state.supplies_needed.value.trim();
  //   if (supplies_needed.length === 0) {
  //     return (
  //       <p className="input-error">Supplies needed are required</p>
  //     );
  //   } else if (supplies_needed.length < 2) {
  //     return (
  //       <p className="input-error">
  //         Supplies needed must be at least 2 characters long
  //       </p>
  //     );
  //   }
  // }

  // validateToolsNeeded() {
  //   const tools_needed = this.state.tools_needed.value.trim();
  //   if (tools_needed.length === 0) {
  //     return (
  //       <p className="input-error">Supplies needed are required</p>
  //     );
  //   } else if (tools_needed.length < 2) {
  //     return (
  //       <p className="input-error">
  //         Supplies needed must be at least 2 characters long
  //       </p>
  //     );
  //   }
  // }

  

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    console.log(currentUser);

    //if the user is not logged in, send to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }
  }

  addProject(e) {
    e.preventDefault();

    const data = {};

    const formData = new FormData(e.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    let user_id = TokenService.getUserId();

    let { project_name, delivery_date, supplies_needed, tools_needed, instructions, done } = data;

    let payload = {
      user_id: user_id,
      project_name: project_name,
      delivery_date: delivery_date,
      supplies_needed: supplies_needed,
      tools_needed: tools_needed,
      instructions: instructions,
      done: done,
    }
    console.log(payload)

    fetch(`${config.API_ENDPOINT}/projects`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "content-type": "application/json" },
      })

        .then((res) => res.json())
        .then((resJson) => {
          window.location = '/projects'
        })
        .catch((err) => {
          console.log(err);
        })
    
  }

  render() {
    
    return (
    
      <div className="add-project">
      
        
        <form className="add-project-form" onSubmit={this.addProject}>
          <h3>Create a new DIY project!!</h3>
          <label htmlFor="project_name">project name:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            onChange={(e) => this.changeProjectName(e.target.value)}
            required
          />
          {this.state.project_name.touched && (
            <ValidationError message={this.validateProjectName()} />
          )}
          <label htmlFor="delivery_date">goal "delivery date":</label>
          <input
            type="date"
            id="delivery_date"
            name="delivery_date"
            onChange={(e) => this.changeDeliveryDate(e.target.value)}    
          />
          <label htmlFor="supplies_needed">supplies needed:</label>
          <input
            type="text"
            id="supplies_needed"
            name="supplies_needed"
            onChange={(e) => this.changeSuppliesNeeded(e.target.value)}
          />
          <label htmlFor="tools_needed">tools needed:</label>
          <input
            type="text"
            id="tools_needed"
            name="tools_needed"
            onChange={(e) => this.changeToolsNeeded(e.target.value)}
          />
          <label htmlFor="instructions">instructions:</label>
          <input
            type="text"
            id="instructions"
            name="instructions"
            onChange={(e) => this.changeInstructions(e.target.value)}
          />
          <label htmlFor="done">done?</label>
          <select
            id="done"
            name="done"
            onChange={(e) => this.changeDone(e.target.value)}
            required
            >
              <option value="" disabled>
                  choose project status
                </option>
                {this.state.done == "to-do myself" ? (
                  <option value="to-do myself" selected>
                  to-do myself
                  </option>
                ) : (
                  <option value="to-do myself">to-do myself</option>
                )}
                {this.state.done == "doin' it myself" ? (
                  <option value="doin' it myself" selected>
                  doin' it myself
                  </option>
                ) : (
                  <option value="doin' it myself">doin' it myself</option>
                )}
                {this.state.done == "DONE it myself!" ? (
                  <option value="DONE it myself!" selected>
                    DONE it myself!
                  </option>
                ) : (
                  <option value="DONE it myself!">
                    DONE it myself!
                  </option>
                )}
            </select>            
        
          <div className="buttons">
            <NavLink to="/projects">
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
  }
}
