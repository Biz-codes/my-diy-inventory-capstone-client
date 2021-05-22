import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sewing-supplies.jpg'

import Nav from './Nav'

function Dashboard() {

    return (
      <div className="Dashboard">
        <div className='nested-nav'>
            <div className='page-heading'>
              <h2>My DIY Dashboard</h2>
            </div>
            <div className='page-heading'>
              <Nav />
            </div>
            
        </div>
        
        <div className="inventory-buttons">
                
                <div className="supplies-button" >
                  <Link to='/supplies' >My DIY Supplies</Link>
                </div>
                <button>My DIY Projects (COMING SOON!)</button>
                <button className="tools-button">My DIY Tools (COMING SOON!)</button>
            
        </div>
      </div>
    );
  }
  


export default Dashboard;