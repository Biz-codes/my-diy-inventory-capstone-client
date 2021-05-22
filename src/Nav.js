import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneArrival, faCompass, faWarehouse } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <ul className='nav-icons'>      
        
       <li>
          <NavLink to='/'><FontAwesomeIcon icon={faPlaneArrival} className="nav-icon"/> landing page</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'><FontAwesomeIcon icon={faCompass} className="nav-icon"/> dashboard</NavLink>
        </li>
        
         <li>
          <NavLink to='/supplies'><FontAwesomeIcon icon={faWarehouse} className="nav-icon"/> supplies</NavLink>
        </li>
        <li></li>
        <li></li>
      </ul>
    
  );
}
