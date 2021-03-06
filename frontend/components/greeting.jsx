import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, logout }) => {
    const display = user ? (
        <div>
            <p>Hello, {user.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );
    
    return <div>
        {display}
    </div>
}