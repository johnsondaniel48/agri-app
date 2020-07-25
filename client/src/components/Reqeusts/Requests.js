import React,{useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';
import Request from './Request';

function Requests(props) {
    const {requestors, filterRequestors,searchResults}= useContext(RequestorContext);
    return (
        <div className="guests">
        { searchResults!== null ? searchResults.map(requestor=><Request key={requestor.id} requestor={requestor}/>):
            requestors.filter(requestor=>filterRequestors||requestor.isEligibleforGrant).map(requestor=><Request key={requestor.id} requestor={requestor}/>)
        }
        </div>
    );
}

export default Requests;