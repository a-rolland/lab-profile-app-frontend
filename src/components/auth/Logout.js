import React, { Component } from 'react';
import service from './auth-service';
import { Redirect } from 'react-router-dom';

const Logout = props => {
    service
        .logout()
        .then((response) => {
            props.callback(null);
        })
        .catch((error) => console.log(error));
    return <Redirect to={'/'} />;
}
export default Logout;