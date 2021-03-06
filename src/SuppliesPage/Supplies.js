import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav";
import config from "../config";
import TokenService from "../services/token-service";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Supplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliesByUserId: [],
      supplies: [],
    };
  }

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    // console.log(currentUser)

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }
    let mySuppliesUrl = `${config.API_ENDPOINT}/supplies/my-supplies/${currentUser}`;

    fetch(mySuppliesUrl)
      .then((supplies) => supplies.json())
      .then((supplies) => {
        return supplies.sort((a, b) => {
          let result = 0;
          if (a.supply_name > b.supply_name) return 1;
          if (a.supply_name < b.supply_name) return -1;
          return result;
        });
      })
      .then((supplies) => {
        this.setState({
          suppliesByUserId: supplies,
        });
      })

      .catch((error) => this.setState({ error }));
  }

  deleteSupply(event) {
    event.preventDefault();

    const data = {};

    const formData = new FormData(event.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    console.log(data);

    let { supply_id } = data;
    // console.log(supply_id);

    fetch(`${config.API_ENDPOINT}/supplies/${supply_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      window.location = `/supplies`;
    });
  }

  render() {
    const showSupplies = this.state.suppliesByUserId.map((supply, key) => {
      return (
        <div className="supply-item" key={key}>
          <h3>{supply.supply_name}</h3>
          <div className="specs">
            <div className="supply-specs-column">
              <p>
                Details: <br /> {supply.details}
              </p>
            </div>
            <div className="supply-specs-column">
              <p>
                Quantity: <br /> {supply.quantity}
              </p>
            </div>
          </div>

          <div className="buttons">
            <NavLink to={{ pathname: "/edit-supply", supply_id: supply.id }}>
              <button>Edit</button>
            </NavLink>
            <form className="delete" onSubmit={this.deleteSupply}>
              <input
                type="hidden"
                name="supply_id"
                defaultValue={supply.id}
              ></input>
              <button type="submit" className="delete">
                Delete
              </button>
            </form>
          </div>
        </div>
      );
    });

    return (
      <div className="supplies">
        <div className="nested-nav">
          <div className="page-heading">
            <h2 className="page-title">My DIY Supplies</h2>
          </div>
          <div className="page-heading">
            <Nav />
          </div>

          <div className="supply-items">{showSupplies}</div>

          <div>
            <button>
              <NavLink to="/add-supply">
                <FontAwesomeIcon icon={faPlus} /> Add Supply
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Supplies;
