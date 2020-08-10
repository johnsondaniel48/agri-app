import React from 'react';
import {Link} from 'react-router-dom'

function Register(props) {
    return (
        <div  className="register">
            <h1>Sign Up</h1>
            <form>
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="password" name="password2" placeholder="Confrim password"/>
                <input type="submit" value="Sign Up" />
            </form>
            <div className="question">
                <p>Already have an account? {""} <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Register;