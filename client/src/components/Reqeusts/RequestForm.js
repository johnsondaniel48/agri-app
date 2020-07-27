import React,{useState, useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';

function RequestForm(props) {

  const [requestor, setRequestor]= useState({
                                                plantName:'',
                                                quantity:'',
                                                requestorName:'',
                                                requestorPhone:'',
                                                requestorAddress:''
                                              });
    
  const {addRequestors}=useContext(RequestorContext);                                            
  const {plantName,quantity,requestorName,requestorPhone,requestorAddress}=requestor;

  const handleChange=e=>{
    setRequestor({
        ...requestor, 
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit=e=>{
    e.preventDefault();
    console.log(requestor);
    addRequestors(requestor);
    setRequestor({
      plantName:'',
      quantity:'',
      requestorName:'',
      requestorPhone:'',
      requestorAddress:''
    });
  }

  return (
        <div className="invite-section">
        <h4>Request for plant/seed</h4>
         <form onSubmit={handleSubmit}>
                <input type="text"  value={plantName} onChange={handleChange} name="plantName" placeholder="Plant Name"  />
                <input type="text" value={quantity} onChange={handleChange} name="quantity" placeholder="Quantity" />
                <input type="text" value={requestorName} onChange={handleChange} name="requestorName" placeholder="requestor Name" />
                <input type="text" value={requestorPhone} onChange={handleChange} name="requestorPhone" placeholder="requestor Phone" />
                <input type="text" value={requestorAddress} onChange={handleChange} name="requestorAddress" placeholder="requestor Address"/>
                <input type="submit" value="Add Request" className="btn" />
        </form>
    </div>
    );
}

export default RequestForm;