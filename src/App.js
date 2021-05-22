import React, { useState } from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Supplies from "./SuppliesPage/Supplies";
// import Tools from "./ToolsPage/Tools";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddSupply from "./SuppliesPage/AddSupply";
import DIYContext from "./DIYContext";
import EditSupply from './SuppliesPage/EditSupply'
import supplies from './dummy'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"



function App() {
  const [supplies_inventory, setSupplies] = useState(supplies.supplies)
  const deleteSupply = (supply_id) => {
    
    const newSupplies = supplies_inventory.filter(supply => {
      return supply.id !== supply_id;
    });
      setSupplies(newSupplies)
    }

    // const [tools_inventory, setTools] = useState(inventory.tools)
    // const deleteTool = (tool_id) => {
    
    // const newTools = tools_inventory.filter(tool => {
    //   return tool.id !== tool_id;
    // });
    //   setTools(newTools)
    // }

  const value= { 
    supplies_inventory,
    setSupplies,
    deleteSupply,
    // tools_inventory,
    // setTools,
    // deleteTool
  }

  

  

  return (
    <DIYContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <h1>My DIY Inventory</h1>
          </header>

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/supplies" component={Supplies} />
            <Route path="/add-supply" component={AddSupply} />
            <Route path="/edit-supply" component={EditSupply} />
          </Switch>

          <footer>
            <p>app by Biz</p>          
            <ul className="nav-icons">
              <li>
                <a href="mailto:elizabeth.biz.hight@gmail.com?subject=Responding%20to%20Your%20Portfolio!">
                  <FontAwesomeIcon icon={faEnvelope} className="nav-icon"/>                    
                </a>
              </li>
              <li>
                  <a href="www.linkedin.com/in/elizabeth-biz-hight" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="nav-icon"/>
                  </a>
              </li>
              <li>
                <a href="https://github.com/biz-codes" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="nav-icon"/>
                </a>
            </li>
        </ul>
          </footer>
        </BrowserRouter>
      </div>
    </DIYContext.Provider>
  );
}

export default App;
