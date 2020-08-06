import React from 'react'
import { Link } from 'react-router-dom'

const Profile = props => {
    
    return (
        <div>
            <h2>Welcome to your profile !</h2>
            <Link to="/logout" className="btn btn-warning">Logout</Link>
        </div>
    )
}

export default Profile
