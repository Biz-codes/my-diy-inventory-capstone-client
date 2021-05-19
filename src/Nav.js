import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneArrival, faCompass, faWarehouse } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <div className='nav-icons'>      
        
        <NavLink to='/supplies'><FontAwesomeIcon icon={faWarehouse} /></NavLink>
        {' '}
        <NavLink to='/dashboard'><FontAwesomeIcon icon={faCompass} /></NavLink>
        {' '}
        <NavLink to='/'><FontAwesomeIcon icon={faPlaneArrival} /></NavLink>
        {' '}
        
    </div>
  );
}
