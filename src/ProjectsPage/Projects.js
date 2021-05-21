import React, { Component } from "react";
import SupplyItem from "./SupplyItem";
import { Link } from "react-router-dom";
import DIYContext from "../DIYContext";
import Nav from "../Nav";

class Supplies extends Component {
  static defaultProps = {
    match: {
        params: {}
    }
  }
  
  static contextType = DIYContext;

  render() {
    const { supply_id } = this.props.match.params
    const { inventory } = this.context
    // console.log(this.context);
    return (
      <div className="supplies">
        <div className="nested-nav">
          <div className="page-heading">
            <h2>My DIY Supplies</h2>
          </div>
          <div className="page-heading">
            <Nav />
          </div>
        </div>
        <div>
          {this.context.inventory.map((supply) => (
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