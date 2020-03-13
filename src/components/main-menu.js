import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Menu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <img src="../images/DIFD-logo.png" />
        <a href="">About</a>
        <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Digital Commerce</a>
            <a href="#">Digital Mass Media</a>
            <a href="#">Interactive Media</a>
            <a href="#">Web Applications</a>
          </div>
        <a href="">Student Work</a>
        <button class="dropbtn">Our People</button>
          <div class="dropdown-content">
            <a href="#">Professors</a>
            <a href="#">Graduates</a>
          </div>
        <a href="" class="apply-button">Apply Now</a>
      </div>
    );
  }
}

export default Menu
