import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import SignUp from "./SignUp";
import LogIn from "./LogIn"
import Dashboard from "./Dashboard";
import Supplies from "./SuppliesPage/Supplies";
// import Tools from "./ToolsPage/Tools";
import "./App.css";
import AddSupply from "./SuppliesPage/AddSupply";
import EditSupply from './SuppliesPage/EditSupply'
import Tools from "./ToolsPage/Tools";
import AddTool from "./ToolsPage/AddTool";
import Projects from "./ProjectsPage/Projects";
import AddProject from "./ProjectsPage/AddProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"





class App extends Component {
  render() {

    return (
        <div className="App">
          <BrowserRouter>
            <header className="App-header">
              <h1>My DIY Inventory</h1>
            </header>
  
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path='/signup' component={SignUp} />
              <Route path='/users/login' component={LogIn} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/supplies" component={Supplies} />
              <Route path="/add-supply" component={AddSupply} />
              <Route path="/edit-supply/" component={EditSupply} />
              <Route path="/tools" component={Tools} />
              <Route path="/add-tool" component={AddTool} />
              <Route path="/projects" component={Projects} />
              <Route path="add-project" component={AddProject} />
            </Switch>
  
            <footer>
              <p>app by Biz</p>          
              <ul className="contact">
                <li>
                  <a href="mailto:elizabeth.biz.hight@gmail.com?subject=Responding%20to%20Your%20Portfolio!">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>                    
                  </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/elizabeth-biz-hight" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                    </a>
                </li>
                <li>
                  <a href="https://github.com/biz-codes" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                  </a>
              </li>
          </ul>
            </footer>
          </BrowserRouter>
        </div>
      
    );
  }


}


  
export default App;
