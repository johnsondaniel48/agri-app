import React,{useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';
import Request from './Request';

function Requests(props) {
    const {requestors}= useContext(RequestorContext);
    return (
        <div className="guests">
            {requestors.map(requestor=><Request key={requestor.id} requestor={requestor}/>)}
        </div>
    );
}

export default Requests;