import React, { Component } from "react";
import SupplyItem from "./SupplyItem";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import config from "../config"
import TokenService from "../services/token-service"

class Supplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        suppliesByUserId: [],
        supplies: [],
    };
}

  componentDidMount() {
    this.showSupplies()
    let currentUser = TokenService.getUserId();
    // console.log(currentUser)
  
    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()){
      window.location = '/'
  }
  let getSupplies = `${config.API_ENDPOINT}/supplies/${currentUser}`;

//   fetch(getDietByUserId)
//       .then((dietsInList) => dietsInList.json())
//       .then((dietsInList) => {
//           console.log(dietsInList)
//           this.setState({
//               dietsByUserId: dietsInList,
//           });
//           //console.log(this.state);
//       })

//       .catch((error) => this.setState({ error }));
  
}



  render() {
    
    return (
      <div className="supplies">
        <div className="nested-nav">
          <div className="page-heading">
            <h2 className="page-title">My DIY Supplies</h2>
          </div>
          <div className="page-heading">
            <Nav />
          </div>
        </div>
        <div>
          {this.context.supplies_inventory.map((supply) => (
            <SupplyItem
              key={supply.id}
              id={supply.id}
              supply_name={supply.supply_name}
              details={supply.details}
              quantity={supply.quantity}

            />
          ))}
        </div>
        <button>
          <Link to="/add-supply">Add Supply</Link>
        </button>
      </div>
    );
  }
}

export default Supplies;
