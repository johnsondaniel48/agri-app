import {TOGGLE_FILTER, SEARCH_REQUESTOR , CLEAR_SEARCH} from '../Types';

export default (state,{type,payload})=>{
    switch(type){
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
