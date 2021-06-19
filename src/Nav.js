import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faTheaterMasks, faThumbtack, faFingerprint } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <ul className="nav-icons">
      <li>
        <NavLink to="/">
          <FontAwesomeIcon icon={faLightbulb} className="nav-icon" /> welcome
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews">
          <FontAwesomeIcon icon={faTheaterMasks} className="nav-icon" /> reviews
        </NavLink>
      </li>      
      <li>
        <NavLink to="/businesses">
          <FontAwesomeIcon icon={faThumbtack} className="nav-icon" /> businesses
        </NavLink>
      </li>
      <li>
        <NavLink to="/me-friendly">
          <FontAwesomeIcon icon={faFingerprint} className="nav-icon" /> me-friendly
        </NavLink>
      </li>
    </ul>
  );
}
