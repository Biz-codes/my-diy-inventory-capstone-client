import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sewing-supplies.jpg'

import Nav from './Nav'

function Dashboard() {

    return (
      <div className="Dashboard">
        <div className='nested-nav'>
            <div className='page-heading'>
              <h2 className="page-title">My DIY Dashboard</h2>
            </div>
            <div className='page-heading'>
              <Nav />
            </div>
            
        </div>
        
        <div className="inventory-buttons">
                
                <div className="supplies-entrance" >
                  <button className='entrance-button'>
                    <Link to='/supplies' >
                      My DIY <br />Supplies
                    </Link>
                  </button>
                </div>
                <div className="projects-entrance">
                  <button className="entrance-button">
                    My DIY <br /> Projects (COMING SOON!)</button>
                </div>                
                <div className="tools-entrance">
                  <button className="entrance-button">
                    My DIY <br /> Tools <br /> (COMING  <br />SOON!)</button>
                </div>
                
            
        </div>
        <footer>
          <a href='https://www.freepik.com/photos/table'>Table photos created by freepik</a>
        </footer>

      </div>
    );
  }
  


export default Dashboard;