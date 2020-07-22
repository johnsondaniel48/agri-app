import React from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Home from './components/Pages/Home';
import RequestorState from './context/requestorContext/RequestorState';

function App() {
  

  return (
  <RequestorState>
    <div>
      <NavBar/>
      <Home/>
    </div>
  </RequestorState>
  );
}

export default App;
