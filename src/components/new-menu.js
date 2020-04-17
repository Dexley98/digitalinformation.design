import { Link } from "gatsby"
import React from "react"

import DrawerButton from  '../components/drawer-button'
const MainMenu = props => (
  <header>
  <nav className="main-menu">
    <DrawerButton click={props.drawerClickHandler}/>
    <div><a href="/"><img src="../images/difd-menu-logo.png" /></a></div>
    <div className="topnav" id="myTopnav">
      <a href="https://apply.winthrop.edu/apply/" className="apply-now">Apply Now</a>
      <div className="dropdown">
        <button className="dropbtn">Our People
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/our-people#professors"
                state={{prevPath: window.location.pathname}}>
                  Professors
          </Link>
          <Link to="/our-people#graduates"
                state={{prevPath: window.location.pathname}}>
                  Our Graduates
          </Link>
        </div>
      </div>
      <Link to="/student-work"
            state={{ prevPath: window.location.pathname}}>
              Student Work
      </Link>
      <div className="dropdown">
        <button className="dropbtn">DIFD Tracks
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/commerce"
                state={{ prevPath: window.location.pathname}}>
                  Digital Commerce
          </Link>
          <Link to="/massmedia"
                state={{ prevPath: window.location.pathname}}>
                  Digital Mass Media
          </Link>
          <Link to="/interactivemedia"
                state={{ prevPath: window.location.pathname}}>
                  Interactive Media
          </Link>
          <Link to="/webapps"
                state={{ prevPath: window.location.pathname}}>
                  Web Applications
          </Link>
        </div>
      </div>
      <Link to="/"
            state={{ prevPath: window.location.pathname}}
            className="active">
              About
      </Link>
    </div>
  </nav>
  </header>
);

export default MainMenu
