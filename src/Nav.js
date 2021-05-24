import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneArrival, faCompass, faWarehouse, faTools, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFly} from "@fortawesome/free-brands-svg-icons"

export default function Nav() {
  return (
    <ul className='nav-icons'>      
        
       <li>
          <NavLink to='/'>
            <FontAwesomeIcon icon={faPlaneArrival} className="nav-icon"/> 
            landing
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            <FontAwesomeIcon icon={faCompass} className="nav-icon"/> 
            dashboard
          </NavLink>
        </li>       
         <li>
          <NavLink to='/supplies'>
            <FontAwesomeIcon icon={faWarehouse} className="nav-icon"/> 
            supplies
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faTasks} className="nav-icon" /> projects
        </li>
        <li>
          <NavLink to='/tools'>
            <FontAwesomeIcon icon={faTools} className="nav-icon"/> tools
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            <FontAwesomeIcon icon={faFly} className="nav-icon"/> logout
          </NavLink>
          
        </li>
      </ul>
    
  );
}
