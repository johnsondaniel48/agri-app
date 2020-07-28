import React,{useState, useContext,useEffect} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';

function RequestForm(props) {

  const [requestor, setRequestor]= useState({
                                                plantName:'',
                                                quantity:'',
                                                requestorName:'',
                                                requestorPhone:'',
                                                requestorAddress:''
                                              });
 const {addRequestors,editAble,updateRequestor,clearEdit}=useContext(RequestorContext);            
 useEffect(()=>{
    if(editAble!==null){
      setRequestor(editAble);
    }else{
      setRequestor({
        plantName:'',
        quantity:'',
        requestorName:'',
        requestorPhone:'',
        requestorAddress:''
      });
    }
},[editAble])
                                 
  const {plantName,quantity,requestorName,requestorPhone,requestorAddress}=requestor;

  const handleChange=e=>{
    setRequestor({
        ...requestor, 
        [e.target.name]:e.target.value
      })
  }
  if( editAble!==null){
    console.log(editAble);
  } 

  const handleSubmit=e=>{
    e.preventDefault();
    if(editAble!==null){
      updateRequestor(requestor);
      clearEdit();
    }else{
      addRequestors(requestor);
      setRequestor({
        plantName:'',
        quantity:'',
        requestorName:'',
        requestorPhone:'',
        requestorAddress:''
      });
    }
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
                <input type="submit" value={editAble!==null?"Edit":"Add Request"} className="btn" />
                { editAble!==null? <input type="button" value="Cancel" onClick={clearEdit} className="btn clear" />:null }
        </form>
    </div>
    );
}

export default RequestForm;