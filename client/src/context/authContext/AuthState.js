import React, { useReducer } from 'react';
import AuthContext from './Authcontext';
import authReducer from './AuthReducer'
import axios from 'axios';

function AuthState(props) {
    const initailState={
                        userAuth:null
                        ,errors:null
                        };
    const {state,dispatch}= useReducer(authReducer,initailState);

    const registerUsers= userData=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            axios.post("/register",userData,config);        
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <AuthContext.Provider 
    value={
          {
              userAuth:state.userAuth,
              errors:state.errors
          }
          }>{props.children}</AuthContext.Provider>
    );
}

export default AuthState;