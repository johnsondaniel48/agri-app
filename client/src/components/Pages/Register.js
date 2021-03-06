import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/authContext/AuthContext'

function Register(props) {
    const {registerUsers,userAuth,errors}= useContext(AuthContext);
    const [user,setUser] = useState({name:'', email:'', password:'', password2:''});
    const {name, email, password, password2 } = user;

    const handleChange =e=>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    const handleSubmit=e=>{
       e.preventDefault();
       if(password !==password2){
           console.log("passwords are not matching")
       }else{
        registerUsers({name, email, password});
       }
    }

    return (
        <div  className="register">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange}/>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                <input type="password" name="password2" placeholder="Confrim password" value={password2} onChange={handleChange} />
                <input type="submit" value="Sign Up" className="btn"/>
            </form>
            <div className="question">
                {errors!==null&& 
               
                <button className="danger">
                     {errors.msg ? errors.msg:errors.msg[0].msg}<span>X</span></button>}
                <p>Already have an account? {""} <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Register;