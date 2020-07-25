import React,{useReducer} from 'react';
import ReqeustorContext from './RequestorContext';
import RequestorReducer from './RequestorReducer';
import {TOGGLE_FILTER, SEARCH_REQUESTOR, CLEAR_SEARCH} from '../Types';

function RequestorState(props) {
    const initialState={
        filterRequestors:false,
        searchResults:null,
        requestors:[
        {
            id:1,
            requestorName:"Peter",
            requestorPhone:"0456789987",
            requestorAddress:"123 Peter street",
            Type:"Small scale",
            isEligibleforGrant:true
        },
        {
            id:2,
            requestorName:"Trevor",
            requestorPhone:"0456789987",
            requestorAddress:"123 Trevor street",
            Type:"Small scale",
            isEligibleforGrant:true
        },
        {
            id:3,
            requestorName:"Antonio",
            requestorPhone:"0456789987",
            requestorAddress:"123 Antonio street",
            Type:"Large scale" ,
            isEligibleforGrant:false
        },
        {
            id:4,
            requestorName:"Luke",
            requestorPhone:"0456789987",
            requestorAddress:"123 Luke street",
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
   
    const searchRequestor=(searchValue)=>{
        dispatch({
            type:SEARCH_REQUESTOR,
            payload:searchValue
        })  
    }

    const clearSearch=()=>{
        dispatch({
            type:CLEAR_SEARCH,
            searchResults:null
        })  
    }

    return (
    <ReqeustorContext.Provider value={{
        requestors: state.requestors,
        filterRequestors:state.filterRequestors,
        searchResults:state.searchResults,
        toggleRequestorFilter,
        searchRequestor,
        clearSearch
    }}>
        {props.children}
    </ReqeustorContext.Provider>
    );
};

export default RequestorState;  