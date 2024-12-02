import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from "./assets/Dashboard";
import Login from "./assets/Login";

const App = () => {

  return(
    <Router>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
      </Routes>
    </Router>
  )
}

export default App