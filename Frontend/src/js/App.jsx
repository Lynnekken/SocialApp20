import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../../components/pages/Home";
import AboutUs from "../../components/pages/AboutUs";
import Offer from "../../components/pages/Offer";
import Request from "../../components/pages/Request";
import Profile from "../../components/pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
  <Navbar/>
  <div className> 
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/aboutus" element={<AboutUs />} />
   <Route path="/profile" element={<Profile />} />
   <Route path="/request" element={<Request />} />
   <Route path="/offer" element={<Offer />} />


  </Routes>
  
  </div>
  </>
  );
}

export default App;
