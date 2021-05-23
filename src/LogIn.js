import React, { Component } from 'react'
import ValidationError from "./ValidationError"
import AuthApiService from "./services/auth-api-service"
import TokenService from "./services/token-service.js"
import { Link } from 'react-router-dom'

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: {
                value: "",
                touched: false,
            },
            password: {
                value: "",
                touched: false,
            },
            LogInUserID: 0,
            error: null,
        };
    }

    changeUsername(username) {
        this.setState({
            username: { value: username },
        });
    }

    changePassword(password) {
        this.setState({
            password: { value: password },
        });
    }

    validateUserName() {
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

    loginUser = (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        // console.log("username:", username.value, "password:", password.value);
        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })

            .then((response) => {
            //    console.log("response ID", response);
                // username.value = "";
                // password.value = "";
                TokenService.saveAuthToken(response.authToken);
                TokenService.saveUserId(response.userId);
                window.location = "/dashboard";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="log-in">
                <h2>Log into your account!</h2>
                <p className="demo">To try the demo:</p>
                <p className="demo">username: DIYDemo</p>
                <p className="demo">password: Fabulous1</p>
                <form className='log-in-form' onSubmit={this.loginUser}>
                    <label htmlFor="username">username:</label>
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        placeholder='Enter your e-mail.' 
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

                    <Link to= '/'>
                        <button>Cancel</button>
                    </Link>
                    <button type='submit' disabled={this.state.submitButtonDisabled}>
                        Submit
                    </button>

                </form>
            
                <Link to='/signup'>Need to create an account?</Link>
            </div>
        )
    }
}