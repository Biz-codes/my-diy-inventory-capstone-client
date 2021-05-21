import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneArrival, faCompass, faWarehouse } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <div className='nav-icons'>      
        
        <div>
          <NavLink to='/supplies'><FontAwesomeIcon icon={faWarehouse} className="nav-icon"/> supplies</NavLink>
        </div>
        <div>
          <NavLink to='/dashboard'><FontAwesomeIcon icon={faCompass} className="nav-icon"/> dashboard</NavLink>
        </div>
        <div>
          <NavLink to='/'><FontAwesomeIcon icon={faPlaneArrival} className="nav-icon"/> landing page</NavLink>
        </div>
        
        {' '}
        
    </div>
  );
}
