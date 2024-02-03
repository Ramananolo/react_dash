import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign_in from './layouts/authentification/sign-in';
import Sign_up from './layouts/authentification/sign-up';
import Dashboard from "./layouts/Dashboard";
import DataComponent from "./components/DataComponent";

export default function App (){
  return(
    <Router>
        <Routes>
          <Route path="/" exact Component={Sign_in}/>
          <Route path="/sign-up" exact Component={Sign_up}/>
          <Route path="/Dashboard" exact Component={Dashboard}/>
          <Route path="/data" exact Component={DataComponent}/>
        </Routes>
    </Router>
  );
}