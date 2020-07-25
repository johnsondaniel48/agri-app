import React,{useContext,useRef} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';

function RequestSearch(props) {
   const {searchRequestor,clearSearch}= useContext(RequestorContext);
   const searchValue = useRef('');
   const handleChange = e =>{
    if(searchValue.current.value!=='')
    {
        searchRequestor(e.target.value);
    }
    else{
        clearSearch();
    }
   }
   
   return (
        <div>
           <input ref={searchValue} type="text" onChange={handleChange} placeholder="Search Plants by name..." name="search" className="search"/>
           <i className="fas fa-search search-icon"/>
        </div>
    );
}

export default RequestSearch;