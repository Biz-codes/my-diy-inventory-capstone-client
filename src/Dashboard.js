import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        
            <div >
                {/* <button>My DIY Tools</button> */}
                <button className="big-buttons"><Link to='/supplies'>My DIY Supplies</Link></button>
                {/* <button>My DIY Projects</button> */}
            
        </div>
      </div>
    );
  }
  


export default Dashboard;