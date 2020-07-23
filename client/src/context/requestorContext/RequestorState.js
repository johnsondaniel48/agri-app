import React,{useReducer} from 'react';
import ReqeustorContext from './RequestorContext';
import RequestorReducer from './RequestorReducer';
import {TOGGLE_FILTER} from '../Types';

function RequestorState(props) {
    const initialState={
        filterRequestors:false,
        requestors:[
        {
            id:1,
            requesterName:"Peter",
            requesterPhone:"0456789987",
            requesterAddress:"123 Peter street",
            Type:"Small scale",
            isEligibleforGrant:true
        },
        {
            id:2,
            requesterName:"Trevor",
            requesterPhone:"0456789987",
            requesterAddress:"123 Trevor street",
            Type:"Small scale",
            isEligibleforGrant:true
        },
        {
            id:3,
            requesterName:"Antonio",
            requesterPhone:"0456789987",
            requesterAddress:"123 Antonio street",
            Type:"Large scale" ,
            isEligibleforGrant:false
        },
        {
            id:4,
            requesterName:"Luke",
            requesterPhone:"0456789987",
            requesterAddress:"123 Luke street",
            Type:"Medium scale" ,
            isEligibleforGrant:true
        }
    ]
    };
    const [state,dispatch]= useReducer(RequestorReducer,initialState);
   
    const toggleRequestorFilter = () => {
        dispatch({
          type: TOGGLE_FILTER
        })
    };

    return (
    <ReqeustorContext.Provider value={{
        requestors: state.requestors,
        filterRequestors:state.filterRequestors,
        toggleRequestorFilter
    }}>
        {props.children}
    </ReqeustorContext.Provider>
    );
};

export default RequestorState;