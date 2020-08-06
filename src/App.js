import React, { useState } from "react";
import './App.css'
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Route, Switch } from 'react-router-dom'
import Homepage from "./components/Homepage";

const App = () => {
  const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null
  }

  const [state, setState] = useState(initialState)

  const getTheUser = (userObj) => {
    setState({
      loggedInUser: userObj
    })
    setState({
      loggedInUser: userObj
    }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(state.loggedInUser))
    })
  }

  return (
    <div className="App">
      <Switch>
        <Homepage exact path="/" render={props => <Homepage {...props} callback={getTheUser} />} />
        <Route exact path="/signup" render={props => <Signup {...props} callback={getTheUser} />} />
        <Route exact path="/login" render={props => <Login {...props} callback={getTheUser} />} />
        {/* <Route exact path="/logout" render={(props) => <Logout {...props} callback={getTheUser} />} /> */}
        {/* <ProtectedRoute exact path="/profile" user={state.loggedInUser} component={Profile} /> */}
      </Switch>
    </div>
  );
}

export default App;
