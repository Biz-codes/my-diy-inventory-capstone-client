import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav";
import config from "../config";
import TokenService from "../services/token-service";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsByUserId: [],
      projects: [],
    };
  }

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    // console.log(currentUser)

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }
    let myProjectsUrl = `${config.API_ENDPOINT}/projects/my-projects/${currentUser}`;

    fetch(myProjectsUrl)
      .then((projects) => projects.json())
      .then((projects) => {
        return projects.sort((a, b) => {
          let result = 0;
          if (a.project_name > b.project_name) return 1;
          if (a.project_name < b.project_name) return -1;
          return result;
        });
      })
      .then((projects) => {
        this.setState({
          projectsByUserId: projects,
        });
      })

      .catch((error) => this.setState({ error }));
  }

  deleteProject(event) {
    event.preventDefault();

    const data = {};

    const formData = new FormData(event.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    // console.log(data);

    let { project_id } = data;
    // console.log(project_id);

    fetch(`${config.API_ENDPOINT}/projects/${project_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      window.location = `/projects`;
    });
  }

  render() {
    const showProjects = this.state.projectsByUserId.map((project, key) => {
      return (
        <div className="project-item" key={key}>
          <h3>{project.project_name}</h3>
          <div className="project-specs">
            <div className="project-specs-column">
              <p className="underline">
                goal <br />
                "delivery date":
              </p>
              <hr />
              <p> {project.delivery_date.slice(0, 10)}</p>
            </div>
            <div className="project-specs-column">
              <p className="underline">supplies needed: </p>
              <p> {project.supplies_needed}</p>
            </div>
            <div className="project-specs-column">
              <p className="underline">tools needed: </p>
              <p>{project.tools_needed}</p>
            </div>
            <div className="project-specs-column">
              <p className="underline">instructions: </p>
              <p> {project.instructions}</p>
            </div>
            <div className="project-specs-column">
              <p className="underline">done? </p>
              <p>{project.done}</p>
            </div>
          </div>
          <div className="buttons">
            <NavLink to={{ pathname: "/edit-project", project_id: project.id }}>
              <button>Edit</button>
            </NavLink>
            <form className="delete" onSubmit={this.deleteProject}>
              <input
                type="hidden"
                name="project_id"
                defaultValue={project.id}
              ></input>
              <button type="submit" className="delete">
                Delete
              </button>
            </form>
          </div>
        </div>
      );
    });

    return (
      <div className="projects">
        <div className="nested-nav">
          <div className="page-heading">
            <h2 className="page-title">My DIY Projects</h2>
          </div>
          <div className="page-heading">
            <Nav />
          </div>

          <div className="project-items">{showProjects}</div>

          <div>
            <button>
              <NavLink to="/add-project">
                <FontAwesomeIcon icon={faPlus} /> Add Project
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
