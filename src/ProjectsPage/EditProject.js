import React, { Component } from "react";
import config from "../config";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import ValidationError from "../ValidationError";
import { faSave, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        value: false,
        touched: false,
      }
    };
  // }

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

  toggleDoneState(done) {
    this.setState({
      true: false
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
    // let currentUser = TokenService.getUserId();
    // console.log(currentUser);

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }

    let project_id = this.props.location.project_id;

    // let project_id = this.props.match.params.project_id

    let getProjectSpecsUrl = `${config.API_ENDPOINT}/projects/${project_id}`

    fetch(getProjectSpecsUrl)
      .then(res => res.json())
      .then(({project_name, delivery_date, supplies_needed, tools_needed, instructions, done}) => {
        this.setState({
          project_name: {value: project_name, touched: this.state.project_name.touched},
          delivery_date: {value: delivery_date, touched: this.state.delivery_date.touched}, 
          supplies_needed: {value: supplies_needed, touched: this.state.supplies_needed.touched},
          tools_needed: {value: tools_needed, touched: this.state.tools_needed.touched},
          instructions: {value: instructions, touched: this.state.instructions.touched},
          done: {value: done, touched: this.state.done.touched},
        })
      })

      .catch((error) => this.setState({ error }));
  }

  

  updateProject = (event) => {
    // console.log('hello there')
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    let user_id = TokenService.getUserId();

    let { project_name, delivery_date, supplies_needed, tools_needed, instructions, done } = data;

    let payload = {
      user_id: user_id,
      delivery_date: delivery_date,
      project_name: project_name,
      supplies_needed: supplies_needed,
      tools_needed: tools_needed,
      instructions: instructions,
      done: done
    };
    console.log(payload);

    //     console.log(this.props)


    fetch(`${config.API_ENDPOINT}/projects/${this.props.location.project_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      // .then((response) => response.json())
      .then(() => {
        // window.location = "/projects";
        // this.props.history.push('/projects')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let showProjectSpecs = "";
    showProjectSpecs = (
      <div className="edit-project">
        
        
        <form className="edit-project-form" onSubmit={this.updateProject}>
          <h3>Update your project:</h3>
          <label htmlFor="project_name">project name:</label>
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
          <label htmlFor="delivery_date">goal "delivery date":</label>
          <input
            type="date"
            id="delivery_date"
            name="delivery_date"
            value={this.state.delivery_date.value}
            onChange={(e) => this.changeDeliveryDate(e.target.value)}    
          />
          <label htmlFor="supplies_needed">supplies needed:</label>
          <input
            type="text"
            id="supplies_needed"
            name="supplies_needed"
            value={this.state.supplies_needed.value}
            onChange={(e) => this.changeSuppliesNeeded(e.target.value)}
            // required
          />
          {/* {this.state.supplies_needed.touched && (
            <ValidationError message={this.validateSuppliesNeeded()} />
          )} */}
          <label htmlFor="tools_needed">tools needed:</label>
          <input
            type="text"
            id="tools_needed"
            name="tools_needed"
            value={this.state.tools_needed.value}
            onChange={(e) => this.changeToolsNeeded(e.target.value)}
            // required
          />
          {/* {this.state.tools_needed.touched && (
            <ValidationError message={this.validateQuantity()} />
          )} */}
          <label htmlFor="instructions">instructions:</label>
          <input
            type="text"
            id="instructions"
            name="instructions"
            value={this.state.instructions.value}
            onChange={(e) => this.changeInstructions(e.target.value)}
          />
          <label htmlFor="done">done</label>
          <input
            type="checkbox"
            id="done"
            name="done"
            value = {this.state.done.value}
            onCheck={(e) => this.toggleDoneState()}
          />
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
        </form>
      </div>
    );

    return <div>{showProjectSpecs}</div>;
  }
}
