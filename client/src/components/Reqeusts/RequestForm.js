import React,{useState} from 'react';

function RequestForm(props) {

    const [plantName, setPlantName]=useState('');
  const [quantity, setQuantity]=useState('');
  const [requesterName, setRequesterName]=useState('');
  const [requesterPhone, setRequesterPhone]=useState('');
  const [requesterAddress, setRequesterAddress]=useState('');

  const handleSubmit=()=>{
    console.log(plantName);
  }
    return (
        <div className="invite-section">
        <h4>Request for plant/seed</h4>
         <form >
                <input type="text"  value={plantName} onChange={e=>setPlantName(e.target.value)} name="plantName" placeholder="Plant Name" />
                <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} name="quantity" placeholder="Quantity" />
                <input type="text" value={requesterName} onChange={e=>setRequesterName(e.target.value)} name="requesterName" placeholder="Requester Name" />
                <input type="text" value={requesterPhone} onChange={e=>setRequesterPhone(e.target.value)} name="requesterPhone" placeholder="Requester Phone" />
                <input type="text" value={requesterAddress} onChange={e=>setRequesterAddress(e.target.value)} name="requesterAddress" placeholder="Requester Address"/>
                <input type="submit" value="Add Request" className="btn" />
        </form>
    </div>
    );
}

export default RequestForm;