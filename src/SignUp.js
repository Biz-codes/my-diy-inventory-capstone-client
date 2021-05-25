import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ValidationError from './ValidationError'
import AuthApiService from './services/auth-api-service'
import TokenService from './services/token-service.js'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                touched: false,
            },
            username: {
                value: "",
                touched: false,
            },
            password: {
                value: "",
                touched: false,
            },
            repeatPassword: {
                value: "",
                touched: false,
            },
        };
    }

    changeName(name) {
        this.setState({
            name: { value: name, touched: true },
        });
    }

    changeUsername(username) {
        this.setState({
            userName: { value: username, touched: true },
        });
    }

    changePassword(password) {
        this.setState({
            password: { value: password, touched: true },
        });
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({
            repeatPassword: { value: repeatPassword, touched: true },
        });
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return <p className="input-error">Name is required</p>;
        } else if (name.length < 2) {
            return (
                <p className="input-error">
                    Name must be at least 2 characters long
                </p>
            );
        }
    }

    validateUsername() {
        const username = this.state.username.value.trim();
        if (username.length === 0) {
            return <p className="input-error">Username is required</p>;
        } else if (username.length < 2) {
            return (
                <p className="input-error">
                    Username must be at least 2 characters long
                </p>
            );
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return <p className="input-error">Password is required</p>;
        } else if (password.length < 6 || password.length > 72) {
            return (
                <p className="input-error">
                    Password must be between 6 and 72 characters long
                </p>
            );
        } else if (!password.match(/[0-9]/)) {
            return (
                <p className="input-error">
                    Password must contain at least one number
                </p>
            );
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        // this.setState({submitButtonDisabled: 'disabled'});
        if (repeatPassword !== password) {
            return <p className="input-error">Passwords must match</p>;
        }
        // else {
        //     this.setState({submitButtonDisabled: ''});
        // }
    }

    registerUser = (event) => {
        event.preventDefault();
          //get the input from the form submission
          const data = {};
          //get the payload from the form submission
          const formData = new FormData(event.target);
          for (let value of formData) {
              data[value[0]] = value[1];
          }
         // console.log(data);
  
          let { name, username, password} = data;
        //   console.log(name, username, password);
          //validate user data
  
        this.setState({ error: null })
        AuthApiService.postUser({
            name: name,
            username: username,
            password: password,
        })
    
        .then(response => {
            // console.log('user:', response)
            // userName.value = ''
            // password.value = ''
            // repeatPassword.value = ''
            TokenService.saveAuthToken(response.authToken)
            TokenService.saveUserId(response.id)
            window.location = "/dashboard"
        }) 
    
        .catch(res => {
            this.setState({ error: res.error })
        })  
       }

    render() {
        return (
            <div className="sign-up">
                <h2>Create an account!</h2>
                <form className='sign-up-form' onSubmit={this.registerUser}>
                    <label htmlFor="name">name:</label>
                    <input                         
                        type="text" 
                        name="name"  
                        id="name"
                        placeholder='Type your name.'
                        onChange={(e) =>
                                this.changeName(e.target.value)
                        }
                        required
                    />
                    {this.state.username.touched && (
                            <ValidationError
                                message={this.validateName()}
                            />
                        )}
    
                    <label htmlFor="username">username:</label>
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        placeholder='Enter a valid e-mail.' 
                        onChange={(e) =>
                                this.changeUsername(e.target.value)
                        }
                        required
                    />
                    {this.state.username.touched && (
                        <ValidationError
                            message={this.validateUsername()}
                        />
                    )}
                
                    <label htmlFor="password">password:</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        placeholder='Create a password.' 
                        onChange={(e) =>
                                this.changePassword(e.target.value)
                        }
                        required
                    />  
                    {this.state.password.touched && (
                        <ValidationError
                            message={this.validatePassword()}
                        />
                    )}
                    <label>retype password:</label>
                        <input
                            type="password"
                            name="passwordpassword"
                            id="passwordpassword"
                            placeholder="Retype the password."
                            onChange={(e) =>
                                this.updateRepeatPassword(e.target.value)
                            }
                            required
                        />
                         
                        {this.state.repeatPassword.touched && (
                            <ValidationError
                                message={this.validateRepeatPassword()}
                            />
                        )}
                
                    <NavLink to= '/'>
                        <button>Cancel</button>
                    </NavLink>
                    <button type='submit' disabled={this.state.submitButtonDisabled}>
                        <FontAwesomeIcon icon={faDoorOpen} /> Submit
                    </button>

                </form>
                <div>
                    <NavLink to='/users/login'>Already have an account?</NavLink>
                </div>
            </div>
        )
    }
}
