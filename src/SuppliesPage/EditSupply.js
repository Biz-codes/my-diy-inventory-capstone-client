import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DIYContext from '../DIYContext'
import PropTypes from 'prop-types'


export default class EditSupply extends Component {
    static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.object,
        }),
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };

   static contextType = DIYContext;

    state = {
        id: '',
        supply_name: '',
        details: '',
        quantity: 1,
    };

    componentDidMount() {
        const { supplyId } = this.props.match.params;
        this.setState({
            id: this.state.id,
            supply_name: this.state.supply_name,
            details: this.state.details,
            quantity: this.state.quantity,
        })
    }
    
    handleEditSupply = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { supply_name, details, quantity } = e.target;
        const editedSupply = {
            id: supplyId,
            supply_name: supply_name.value,
            details: details.value,
            quantity: quantity.value
        }
        console.log(editedSupply);
        this.context.handleEditSupply([...this.context.inventory, editedSupply])
        
    }
    
    handleClickCancel = () => {
        this.props.history.push('/supplies')
      };

    render() {

        return (
            const { supply_name, details, quantity } = this.state
            <div className='edit-form'> 
            <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Edit this supply:</h3>
                
                    <label htmlFor="supply_name">supply name:</label>
                    <input
                        type='text'
                        name='supply_name'
                        value={supply_name}
                        onChange={this.handleEditSupply}
                    />
                    <label htmlFor='details'>details</label>
                    <input
                        type='text'
                        name='details'
                        value={this.context.value}
                        onChange={this.handleEditSupply}
                    />
                    <label htmlFor='quantity'>quantity</label>
                    <input 
                        type='number'
                        name='quantity'
                        value={this.context.value}
                        onChange={this.handleEditSupply}
                    />
                
                
                <div className='buttons'>
                    <button type='button' onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    <button type='submit'>
                        Save
                    </button>
                </div>
                
            </form>
            </div>
        )
    }
}