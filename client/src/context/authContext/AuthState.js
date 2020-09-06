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
    const [state,dispatch]= useReducer(authReducer,initailState);

    const registerUsers= async userData=>{
        // const config={
        //     method: 'POST',
        //     headers:{
        //         'Accept': 'application/json',
        //         "Content-Type":"application/json",
        //         "Access-Control-Allow-Origin":"http://127.0.0.1:3000",
        //         "Access-Control-Allow-Headers": "Content-Type"
        //     }
        // }
        // try {
        //     const res= axios.post("/register",userData,config);
        //     dispatch({
        //         type: SUCCESS_REGISTER, 
        //         payload: res.data
        //     })        
        // } catch (error) {
        //     dispatch({
        //         type: FAIL_REGISTER,
        //         payload:error.response.data
        //     })
        //     console.log(error)
        // }

        fetch("/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    
        .then((response) => response.json())
            .then((responseData) => {
             dispatch({
              type: SUCCESS_REGISTER, 
              payload: responseData
             })     
        })
    }

    const loginUsers= async userData=>{
        const config={
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"http://127.0.0.1:3000",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type"
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