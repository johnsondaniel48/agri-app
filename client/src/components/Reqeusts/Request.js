import React, {useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';

function Request({requestor}) {
 
    const {id,requestorName,requestorPhone,requestorAddress}=requestor;
    const {removeRequestor}=useContext(RequestorContext);
    const handleRemove=()=>{
        removeRequestor(id);
    }
    return (
        <div className="guest-card">
            <div className="card-head">
              <div>
                  <label>Requests
                  <i className="fas fa-check-square">
                      <input type="checkbox"/>
                  </i>
                  </label>
              </div>
              <div>
                  <button>
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