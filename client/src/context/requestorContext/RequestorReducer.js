import {
          TOGGLE_FILTER
        , SEARCH_REQUESTOR
        , CLEAR_SEARCH
        , ADD_REQUESTORS
        , REMOVE_REQUESTORS
        , UPDATE_REQUESTORS
        , EDIT_REQUESTOR
        , CLEAR_EDIT
        } from '../Types';

//state: Returing state
//type : input   
//payload : input         
export default (state,{type,payload})=>{
    switch(type){

        case CLEAR_EDIT:
            return{
                ...state
                ,editAble:null
            }
        case EDIT_REQUESTOR:
            return {
                ...state
                ,editAble:payload
              }
        case UPDATE_REQUESTORS:
            return {...state,requestors:state.requestors.map(requestor=>requestor.id==payload.id?payload:requestor)};

        case REMOVE_REQUESTORS:
            return {...state,requestors:state.requestors.filter(requestor=>requestor.id!==payload)}
        case ADD_REQUESTORS:
            return {...state,
            requestors:[...state.requestors,payload]}
        case CLEAR_SEARCH:
            return {...state, 
                searchResults:null
            };
        case SEARCH_REQUESTOR:
            return {...state,searchResults:state.requestors.filter(requestor=>requestor.requestorName.match(payload))}
        case TOGGLE_FILTER:
            return {...state, 
                    filterRequestors:!state.filterRequestors
                };
        default : return state;
    }
}
