import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import TokenService from "./services/token-service.js"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
    
    let currentUser = TokenService.getUserId();
    // console.log(currentUser)

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }
    
  }

  render() {
    let currentUser = TokenService.getUserId();
    return (
      <div className="Dashboard">
        <div className="nested-nav">
          <div className="page-heading">
            <h2 className="page-title">My DIY Dashboard {currentUser}</h2>
          </div>
          <div className="page-heading">
            <Nav />
          </div>
        </div>

        <div className="inventory-buttons">
          <div className="supplies-entrance">
            <NavLink to="/supplies">
              <button className="entrance-button">
                My DIY <br />
                Supplies
              </button>
            </NavLink>
          </div>
          <div className="projects-entrance">
            <button className="entrance-button">
              My DIY <br /> Projects <br /> (COMING <br /> SOON!)
            </button>
          </div>
          <div className="tools-entrance">
            <NavLink to="/tools">
              <button className="entrance-button">
                My DIY <br /> Tools
              </button>
            </NavLink>
            
          </div>
        </div>
        <footer>
          <a href="https://www.freepik.com/photos/table">
            Table photos created by freepik
          </a>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
