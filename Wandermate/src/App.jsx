import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Navigation from "./Navigation";
import UseEffect from "./UseEffect";
import HotelList from "./Hotel";
import Destination from "./Destination";
import Reviews from "./Reviews";
import Home from "./Home";

function App() {

  return (
    <>
      {/* <UseEffect/> */}
      
      <BrowserRouter>
      <Navigation/>
      <Routes>
        {/* <Route path="/signin" element= {<Signin/> }/>
        <Route path="/signup" element= {<Signup/> }/> 
        <Route path="/review" element= {<Reviews/>}/> */}
        <Route path="/" element= {<Home/>}/>
        <Route path="/destination" element= {<Destination/> }/>
        <Route path="/hotel" element= {<HotelList/> }/>
      </Routes>
      </BrowserRouter>     
    </>
  );
}
export default App;
