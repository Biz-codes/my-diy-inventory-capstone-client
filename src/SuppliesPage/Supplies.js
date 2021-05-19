import React, { Component } from 'react';
import supplies from '../dummy'
import SupplyItem from './SupplyItem'
import { Link } from 'react-router-dom'
import DIYContext from '../DIYContext'
import Nav from '../Nav'

class Supplies extends Component {
  
  
static contextType = DIYContext 

  render() {
    console.log(this.context)
    return (
      <div className="supplies">
        <header>
            <h2>My DIY Supplies</h2>
            <Nav />
        </header>
        <div>
          {this.context.inventory.map(supply => (
            <SupplyItem 
              key={supply.id}
              supply_name={supply.supply_name}
              details={supply.details}
              quantity={supply.quantity}
            />
          ))}
        </div>
        <button>
            <Link to='/add-supply'>Add Supply</Link>
        </button>
      </div>
    );
  }
    
}
  


export default Supplies;