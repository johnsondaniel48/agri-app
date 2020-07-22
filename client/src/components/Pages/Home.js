import React from 'react';
import RequestForm from '../Reqeusts/RequestForm';
import RequestMain from '../Reqeusts/RequestMain';
import RequestSearch from '../Reqeusts/RequestSearch';
import Requests from '../Reqeusts/Requests';

function Home(props) {
    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
                  <RequestSearch/>
                </div>
                <RequestForm/>
                <RequestMain/>
           </div>
           <Requests/>
        </div>
    );
}

export default Home;