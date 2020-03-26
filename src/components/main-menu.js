import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Menu extends React.Component {
  render() {
    return (
      <div class="topnav" id="myTopnav">
        <a href="javascript:void(0);" class="icon" onclick="dropDown()">&#9776;</a>
        <a href="#about" class="apply-now">Apply Now</a>
        <div class="dropdown">
          <button class="dropbtn">Our People
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Professors</a>
            <a href="#">Our Graduates</a>
          </div>
        </div>
        <a href="#news">Student Work</a>
        <div class="dropdown">
          <button class="dropbtn">DIFD Tracks
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Digital Commerce</a>
            <a href="#">Digital Mass Media</a>
            <a href="#">Interactive Media</a>
            <a href="#">Web Applications</a>
          </div>
        </div>
        <a href="#home" class="active">About</a>
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
