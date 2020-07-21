import React from 'react';
import RequestForm from '../Reqeusts/RequestForm';
import RequestMain from '../Reqeusts/RequestMain';
import  RequestSearch from '../Reqeusts/RequestSearch';

function Home(props) {
    return (
        <div className="app-container">
            <div className="main">
            <RequestSearch/>
            <RequestForm/>
            <RequestMain/>
           </div>
        </div>
    );
}

export default Home;