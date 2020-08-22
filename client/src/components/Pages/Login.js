import React, {useState, useImperativeHandle} from 'react';
import {Link} from 'react-router-dom'

function Login(props) {
    const [user,setUser]= useState({email:'',password:''});
    const {email, password}= user;
    const handleChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }    
    const handleSubmit=e=>{
        e.preventDefault();
        console.log({email,password});
    }

    return (
        <div  className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange}/>
                <input type="submit" value="Sign Up" className="btn" />
            </form>
            <div className="question">
                <p>Already have an account? {""} <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
}

export default Login;