import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  }
 const handleMouseLeave = () => {
  setIsHovering(false);
 }
 const navbarBrandStyle = {
  backgroundColor: isHovering ? "#bfcdb4" : "white"
 }

 const navbarTypeStyle = {
  color: isHovering ? "white" : "black"
 }


  return (
    <>
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={navbarBrandStyle}>
<nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">Home</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/aboutus">About Us</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/request">Request</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/offer">Offer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/LogIn">LogIn</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</>
  );
}

export default Navbar