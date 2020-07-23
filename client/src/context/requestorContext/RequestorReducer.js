import {TOGGLE_FILTER} from '../Types';

export default (state,{type,payload})=>{
    switch(type){
        case TOGGLE_FILTER:
            return {...state, 
                    filterRequestors:!state.filterRequestors
                };
        default : return state;
    }
}
