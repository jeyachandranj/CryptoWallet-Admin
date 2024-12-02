import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from "./assets/Dashboard";
import Login from "./assets/Login";
import UpdateCredentials from "./assets/UpdateCredentials";

const App = () => {

  return(
    <Router>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route element={<UpdateCredentials/>} path="/updatecredentials"/>
      </Routes>
    </Router>
  )
}

export default App