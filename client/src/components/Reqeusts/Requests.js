import React,{useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';
import Request from './Request';

function Requests(props) {
    const {requestors, filterRequestors}= useContext(RequestorContext);
    return (
        <div className="guests">
            {requestors.filter(requestor=>filterRequestors||requestor.isEligibleforGrant).map(requestor=><Request key={requestor.id} requestor={requestor}/>)}
        </div>
    );
}

export default Requests;