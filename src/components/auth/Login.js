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
                props.history.push("/profile")
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
            <form className="form-group m-2" onSubmit={handleFormSubmit} style={{maxWidth:"350px"}}>
            <label>Username:</label>
                <input className="form-control" 
                    type="text" 
                    name="username" 
                    value={state.username} 
                    placeholder="Enter your name"
                    onChange={handleChange} />

                <label>Password:</label>
                <input type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="********"
                    value={state.password} 
                    onChange={handleChange} />

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