import React,{useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';

function RequestFilter() {
    const {toggleRequestorFilter} = useContext(RequestorContext);
    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox" onChange={()=>toggleRequestorFilter()}  />
                <span className="slider round"></span>
            </label>
            <p className="lead"> show granted ones</p>
        </div>
    );
}

export default RequestFilter;