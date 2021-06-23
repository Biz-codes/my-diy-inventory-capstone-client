import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="hook">
        <p>we-friendly is a crowd-sourced hub for voices from communities to share insight 
          into which spaces are respectful, accessible and affirming! Find businesses and 
          services that are -friendly toward folx who share aspects of YOUR lived experience. 
          Discover what it's like to be visible in these spaces, and choose your favorite 
          local venues to express your authentic self. Transform places in your community to 
          be your own - to be welcoming to others like you. Make sure your community is 
          supporting businesses and services that support people like you - however you 
          identify. Then, when you travel, use we-friendly to find -friendly folx - even in 
          unfamiliar locations. Together, we have financial power, so make your dollar count 
          by supporting local businesses and services that support folx like you - near or 
          far from home!</p>
      </div>

      <div className="landing-buttons" aria-live="polite">
        <Link to="/signup">
          <button className="landing-button">Sign Up</button>
        </Link>
        <Link to="/users/login">
          <button className="demo-button">Demo</button>
        </Link>
        <Link to="users/login">
          <button className="landing-button">Log In</button>
        </Link>
      </div>

      <footer>
        
      </footer>
    </div>
  );
}
