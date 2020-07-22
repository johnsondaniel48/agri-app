import React,{useReducer} from 'react';
import ReqeustorContext from './RequestorContext';
import RequestorReducer from './RequestorReducer';

function RequestorState(props) {
    const initialState={
        requestors:[
        {
            id:1,
            requesterName:"Peter",
            requesterPhone:"0456789987",
            requesterAddress:"123 Peter street"
        },
        {
            id:2,
            requesterName:"Trevor",
            requesterPhone:"0456789987",
            requesterAddress:"123 Trevor street"
        },
        {
            id:3,
            requesterName:"Antonio",
            requesterPhone:"0456789987",
            requesterAddress:"123 Antonio street"
        }
    ]
    };
    const [state,dispatch]= useReducer(RequestorReducer,initialState);
    return (
        // <div></div>
    <ReqeustorContext.Provider value={{requestors: state.requestors}}>{props.children}</ReqeustorContext.Provider>
    );
};

export default RequestorState;