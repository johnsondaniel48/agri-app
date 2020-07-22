import React from 'react';

function NavBar(props) {
    return (
        <div className="navbar">
               <div className="logo">
                    <h1>
                        <i className="fas fa-leaf"/>
                            Agri needs
                    </h1>
                <p>Made by John</p>
               </div>
               <ul>
                   <li>Hello</li>
                   <span className="sm-hide">|</span>
                   <li>
                       <a href="#!">
                           <span className="sm-hide">Signout</span>
                           <i className="fas fa-sign-out-alt"/>
                       </a>
                   </li>
               </ul>
            </div>
    );
}

export default NavBar;