import React,{useContext} from 'react';
import RequestorContext from '../../context/requestorContext/RequestorContext';
function RequestMain(props) {
    const {requestors}=useContext(RequestorContext);
    const totalCount=requestors.length;
    return (
        <div>
            <table>
                <tr>
                    <th>Requesters</th>
                    {/* <th>Plant Name</th>
                    <th>Quantity</th> */}
                </tr>
                <tr>
                    <td>{totalCount}</td>
                    {/* <td>Plantain(no.)</td>
                    <td>10</td> */}
                </tr>
                {/* <tr>
                    <td>Jisha</td>
                    <td>Ginger(kg)</td>
                    <td>10</td>
                </tr> */}
            </table>
        </div>
    );
}

export default RequestMain;