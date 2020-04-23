import { Link } from "gatsby"
import React from "react"

import DrawerButton from  '../components/drawer-button'
import Logo from '../images/difd-menu-logo.png'

const MainMenu = props => (
  <header>
  <nav className="main-menu">
    <DrawerButton click={props.drawerClickHandler}/>
    <div><a href="/"><img src={Logo} /></a></div>
    <div className="topnav new-menu" id="myTopnav">
      <a href="https://apply.winthrop.edu/apply/" className="apply-now">Apply Now</a>
      <div className="dropdown">
        <button className="dropbtn">Our People
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/our-people#professors"
                state={{prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Professors
          </Link>
          <Link to="/our-people#graduates"
                state={{prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Our Graduates
          </Link>
        </div>
      </div>
      <Link to="/student-work"
            state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
              Student Work
      </Link>
      <div className="dropdown">
        <button className="dropbtn">DIFD Tracks
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/commerce"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Digital Commerce
          </Link>
          <Link to="/massmedia"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Digital Mass Media
          </Link>
          <Link to="/interactivemedia"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Interactive Media
          </Link>
          <Link to="/webapps"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Web Applications
          </Link>
        </div>
      </div>
      <Link to="/"
            state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
            className="active apply-now">
              About
      </Link>
    </div>
  </nav>
  </header>
);

export default MainMenu
