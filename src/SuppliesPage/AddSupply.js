// import React, { Component } from 'react'


// export default class AddSupply extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             supply_name:'',
//             details: '',
//             quantity: null,
//         };
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const {supply_name, details, quantity} = e.target
//         const newSupply = {
//             supply_name: supply_name.value,
//             details: details.value,
//             quantity: quantity.value
//         }
//         this.setState({
            
//                 supplies.push(newSupply)
            
//         })

//     }

//     render() {
//         return (
//             <form>
//                 <h3>Add a supply to your inventory!</h3>
//                 <p>supply name:</p>
//                 <input
//                     type='text'
//                     name='supply_name'
//                 />
//                 <p>details</p>
//                 <input
//                     type='text'
//                     name='details'
//                 />
//                 <p>quantity</p>
//                 <input 
//                     type='number'
//                     name='quantity'
//                 />
//                 <button type='submit'>
//                     Save
//                 </button>
//             </form>
//         )
//     }
// }