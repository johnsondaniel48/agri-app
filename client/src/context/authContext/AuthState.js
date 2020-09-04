import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer'
import axios from 'axios';
import {
     SUCCESS_REGISTER
    ,SUCCESS_LOGIN
    ,FAIL_REGISTER
    ,FAIL_LOGIN
    } from '../Types';

function AuthState(props) {
    const initailState={
                        userAuth:null
                        ,errors:null
                        };
    const {state,dispatch}= useReducer(authReducer,initailState);

    const registerUsers= async userData=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res= axios.post("/register",userData,config);
            dispatch({
                type: SUCCESS_REGISTER, 
                payload: res.data
            })        
        } catch (error) {
            dispatch({
                type: FAIL_REGISTER,
                payload:error.response.data
            })
            console.log(error)
        }
    }

    const loginUsers= async userData=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res= axios.post("/login",userData,config);
            dispatch({
                type: SUCCESS_LOGIN, 
                payload: res.data
            })        
        } catch (error) {
            dispatch({
                type: FAIL_LOGIN,
                payload:error.response.data
            })
            console.log(error)
        }
    }

    return (
    <AuthContext.Provider 
    value={
          {
              userAuth:state.userAuth,
              errors:state.errors,
              registerUsers,
              loginUsers
          }
          }>{props.children}
    </AuthContext.Provider>
    );
}

export default AuthState;