import React,{useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';
function RequestMain(props) {
    const {requestors}=useContext(RequestorContext);
    return (
        <div>
            <h3>Farmer Details</h3>
            <table>
            <thead>
                <tr>
                        <th>Name</th>                    
                        <th>Phone</th>
                        <th>Address</th>
                   
                </tr>
                </thead>
                <tbody>
                { 
                    requestors.map(item=>
                        <tr key={item.id}>
                            <td>{item.requestorName}</td>
                            <td>{item.requestorPhone}</td>
                            <td>{item.requestorAddress}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default RequestMain;