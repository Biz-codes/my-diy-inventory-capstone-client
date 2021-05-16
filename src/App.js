import React from 'react';
import Landing from './Landing'
import Dashboard from './Dashboard'
import Supplies from './SuppliesPage/Supplies'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <h1>My DIY Inventory</h1>
          </header>
          
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/supplies' component={Supplies} />
          </Switch>
        
          <footer>footer</footer> 
        </BrowserRouter>          
      </div>
    );
  }
  


export default App;
