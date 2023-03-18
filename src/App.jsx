// import { Router } from "express";
import React from "react";
// import { Route } from "react-router-dom";
import {Route, Routes} from "react-router-dom" ;
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Drinkspage from "./components/Drinkspage";
import Drinkitem from "./components/Drinkitem";
import Homepage from "./components/Homepage";




const App = () => {
  return (
    <div className="App">
      <h1>hello</h1>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/"  element={<Homepage/>}/>
        <Route path="/drinks" element={<Drinkspage/>}/>
        <Route path="/drinks/:id" element={<Drinkitem/>}/>

      </Routes>
      </div>

  ) 
};

export default App;
