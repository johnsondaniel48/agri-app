import React from 'react';
import {Link} from 'react-router-dom'

function Login(props) {
    return (
        <div  className="login">
            <h1>Login</h1>
            <form>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Sign Up" />
            </form>
            <div className="question">
                <p>Already have an account? {""} <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
}

export default Login;