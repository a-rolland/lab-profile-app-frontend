import React, { useState } from 'react';
import service from './auth-service';
import { Link } from 'react-router-dom';

const Signup = props => {

    const initialState = {
        username: "",
        password: ""
    }
    const [state, setState] = useState(initialState)

    // let service = new AuthService()

    // handleChange() and handleSubmit() will be added here
    const handleFormSubmit = event => {
        event.preventDefault();
        const username = state.username;
        const password = state.password;

        service.signup(username, password)
        .then(response => {
            setState({
                username: "",
                password: "",
            });
            props.callback(response)
        })
        .catch(error => console.log(error))
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setState(state =>  ({
            ...state,
            [name]: value
        }));
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type="text" 
                    name="username" 
                    value={state.username} 
                    onChange={handleChange} />

                <label>Password:</label>
                <input name="password" 
                    value={state.password} 
                    onChange={handleChange} />

                <input type="submit" value="Signup" />
            </form>

            <p>
                Already have account?
                <Link to={"/login"}> Login</Link>
            </p>
        </div>
    )
}

export default Signup;