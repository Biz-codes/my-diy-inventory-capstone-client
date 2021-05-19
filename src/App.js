import React, { useState } from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Supplies from "./SuppliesPage/Supplies";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddSupply from "./SuppliesPage/AddSupply";
import DIYContext from "./DIYContext";
import EditSupply from './SuppliesPage/EditSupply'
import supplies from './dummy'

function App() {
  const [inventory, setInventory] = useState(supplies.supplies)
  const value= { 
    inventory,
    setInventory
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

          <footer>footer</footer>
        </BrowserRouter>
      </div>
    </DIYContext.Provider>
  );
}

export default App;
