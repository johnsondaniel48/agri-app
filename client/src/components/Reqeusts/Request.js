import React, {useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';

function Request({requestor}) {
 
    const {id,requestorName,requestorPhone,requestorAddress,isEligibleforGrant}=requestor;
    const {removeRequestor,updateRequestor,editRequestor}=useContext(RequestorContext);
    const handleRemove=()=>{
        removeRequestor(id);
    }
    const handleIsEligibleforGrant=(requestor)=>{
        updateRequestor({...requestor,isEligibleforGrant:!isEligibleforGrant})
    }
    return (
        <div className="guest-card">
            <div className="card-head">
              <div>
                  <label className={`${isEligibleforGrant && 'confrim'}`} > grant awarded 
                    <i className={`fas fa-check-square ${isEligibleforGrant && 'confrim'}`}>
                        <input type="checkbox" onChange={handleIsEligibleforGrant}/>
                    </i>
                  </label>
              </div>
              <div>
                  <button onClick={()=>editRequestor(requestor)}>
                      <i className="fas fa-user-edit"></i>
                  </button>
                  <button>
                      <i className="fas fa-trash-alt remove" onClick={handleRemove} ></i>
                  </button>
              </div>

            </div>
            <div className="card-body">
              <h2>{requestorName}</h2>
              <span className="badge red">Planter</span>
              <div className="contact">
                  <i className="fas fa-phone-alt"></i>
                  <p>{requestorPhone}</p>
                  <p>{requestorAddress}</p>
              </div>
            </div>
        </div>
    );
}

export default Request;