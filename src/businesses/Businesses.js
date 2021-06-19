import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav";
import config from "../config";
import TokenService from "../services/token-service";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Businesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
  }

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    // console.log(currentUser)

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }
    let businessesUrl = `${config.API_ENDPOINT}/businesses`

    fetch(businessesUrl)
      .then((businesses) => businesses.json())
      .then((businesses) => {
        return businesses.sort((a, b) => {
          let result = 0;
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return result;
        });
      })
      .then((businesses) => {
        this.setState({
          businesses: businesses,
        });
      })

      .catch((error) => this.setState({ error }));
  }


  render() {
    const showBusinesses = this.state.businesses.map((business, key) => {
      return (
        <div className="supply-item" key={key}>
          <h3>{business.name}</h3>
          <p>{business.category}</p>
          <p>{business.address}</p>
          <p>{business.city}, {business.state} {business.zipcode}</p>
          <p>{business.website}</p>
          <p>reviews</p>
          <div className="buttons">
            <NavLink to={{ pathname: "/add-review", business_id: business.id }}>
              <button>write a review</button>
            </NavLink>
            {/* <button className="remember">
                remember
            </button> */}
          </div>
        </div>
      );
    });

    return (
      <div className="businesses">
        <Nav />
        <div className="search">
          Search form will go here.
        </div>
        <div className="results">
          <h2>Results</h2>
          {showBusinesses}
        </div>        
        <div>          
          <NavLink to="/add-business">
            <button>
              <FontAwesomeIcon icon={faPlus} />
              <p>Add a business</p>
            </button>    
          </NavLink>
          {/* <button>clear search</button> */}
        </div>
      </div>
    );
  }
}

export default Businesses;
