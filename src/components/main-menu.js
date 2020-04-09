import { Link } from "gatsby"
import React from "react"

class Menu extends React.Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a className="icon" onClick="dropDown()">&#9776;</a>
        <a href="https://apply.winthrop.edu/apply/" className="apply-now">Apply Now</a>
        <div className="dropdown">
          <button className="dropbtn">Our People
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Professors</a>
            <a href="#">Our Graduates</a>
          </div>
        </div>
        <Link to="/student-work">Student Work</Link>
        <div className="dropdown">
          <button className="dropbtn">DIFD Tracks
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/commerce">Digital Commerce</Link>
            <Link to="/massmedia">Digital Mass Media</Link>
            <Link to="/interactivemedia">Interactive Media</Link>
            <Link to="/webapps">Web Applications</Link>
          </div>
        </div>
        <Link to="/" className="active">About</Link>
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
