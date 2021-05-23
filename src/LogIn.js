import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DIYContext from '../DIYContext'

export default class AddSupply extends Component {
    static propTypes = {
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };
   
static contextType = DIYContext;

    render() {
        return (
            <main role="main">
        <header>
            <h2>Sign Up</h2>
        </header>
        <section className='sign-up'>
            <form className='sign-up-form'>
                <div>
                    <label for="name">name:</label>
                    <input placeholder='Name' type="text" name='name' id='name' />
                </div>
                <div>
                    <label for="email">e-mail:</label>
                    <input type="text" name='email' id='email' placeholder='e-mail' />
                </div>
                <div>
                    <label for="username">username:</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="password">password:</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='cancel'>
                    <a href= 'landing-page.html'>cancel</a>
                </button>
                <button type='submit'>
                    <a href= 'dashboard.html'>submit</a>
                </button>
            </form>
        </section>
    </main>
        )
    }
   
}

