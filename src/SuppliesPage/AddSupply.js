import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DIYContext from '../DIYContext'
import uuid from 'react-uuid'


export default class AddSupply extends Component {
    static propTypes = {
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };
   
   
    static contextType = DIYContext;

    
    handleAddSupply = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        
        const { supply_name, details, quantity } = e.target;
        const newSupply = {
            id: uuid(),
            supply_name: supply_name.value,
            details: details.value,
            quantity: quantity.value
        }
        
        this.context.setSupplies([...this.context.inventory, newSupply])
        this.props.history.push('/supplies')
        
    }
    
    handleClickCancel = () => {
        this.props.history.push('/supplies')
      };

    render() {

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Add a supply to your inventory!</h3>
                
                    <label htmlFor="supply_name">supply name:</label>
                    <input
                        type='text'
                        name='supply_name'
                        onChange={this.handleAddSupply}
                    />
                    <label htmlFor='details'>details:</label>
                    <input
                        type='text'
                        name='details'
                        onChange={this.handleAddSupply}
                    />
                    <label htmlFor='quantity'>quantity:</label>
                    <input 
                        type='number'
                        name='quantity'
                        onChange={this.handleAddSupply}
                    />
                
                
                <div className='buttons'>
                    <button onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    <button type='submit'>
                        Save
                    </button>
                </div>
                
            </form>
        )
    }
}