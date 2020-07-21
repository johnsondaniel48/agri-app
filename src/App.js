import React,{useState} from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Home from './components/Pages/Home';

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
