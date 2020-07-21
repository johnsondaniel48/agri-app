import React from 'react';

function RequestSearch(props) {
    return (
        
        <div>
           <input type="text" placeholder="Search Plants by name..." name="search" className="search"/>
           <i className="fas fa-search search-icon"/>
        </div>
    );
}

export default RequestSearch;