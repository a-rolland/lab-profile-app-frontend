import React, { useState } from 'react';
import service from './auth-service';
import { Link } from 'react-router-dom';

const Login = props => {

    const initialState = {
        username: "",
        password: ""
    }

    const [state, setState] = useState(initialState)
    
    // let service = new AuthService();

    const handleFormSubmit = event => {
        event.preventDefault();
        const username = state.username;
        const password = state.password;
        service.login(username, password)
            .then(response => {
                setState({
                    username: "",
                    password: "" 
                });
                props.callback(response)
            })
            .catch(error => console.log(error))
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={state.username} onChange={handleChange} />
                <label>Password:</label>
                <input name="password" value={state.password} onChange={handleChange} />

                <input type="submit" value="Login" />
            </form>
            <p>
                Don't have account?
                <Link to={"/signup"}> Signup</Link>
            </p>
        </div>
    )
}

export default Login;