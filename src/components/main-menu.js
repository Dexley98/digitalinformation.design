import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Menu extends React.Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a className="icon" onClick="dropDown()">&#9776;</a>
        <a href="#about" className="apply-now">Apply Now</a>
        <div className="dropdown">
          <button className="dropbtn">Our People
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Professors</a>
            <a href="#">Our Graduates</a>
          </div>
        </div>
        <a href="#news">Student Work</a>
        <div className="dropdown">
          <button className="dropbtn">DIFD Tracks
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/commerce">Digital Commerce</a>
            <a href="/massmedia">Digital Mass Media</a>
            <a href="/interactivemedia">Interactive Media</a>
            <a href="/webapps">Web Applications</a>
          </div>
        </div>
        <a href="#home" className="active">About</a>
    </div>
    );
  }
}

function dropDown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default Menu
