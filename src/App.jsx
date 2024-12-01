import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from "./assets/Dashboard";

const App = () => {

  return(
    <Router>
      <Routes>
        <Route element={<Dashboard/>} path="/"/>
      </Routes>
    </Router>
  )
}

export default App