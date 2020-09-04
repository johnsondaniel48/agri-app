import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Home from './components/Pages/Home';
import RequestorState from './context/requestorContext/RequestorState';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import AuthState from './context/authContext/AuthState';


function App() {  
  

return (
<AuthState>
  <RequestorState>
    <Router>
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Register" component={Register}></Route>
        <Route exact path="/Login" component={Login}></Route>
      </Switch>
    </div>
    </Router>
  </RequestorState>
  </AuthState>
  );
}

export default App;
