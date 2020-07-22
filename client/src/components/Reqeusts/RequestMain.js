import React from 'react';

function RequestMain(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Requester</th>
                    <th>Plant Name</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>Antonio</td>
                    <td>Plantain(no.)</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Jisha</td>
                    <td>Ginger(kg)</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
    );
}

export default RequestMain;