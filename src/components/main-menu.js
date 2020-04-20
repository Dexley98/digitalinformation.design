import { Link } from "gatsby"
import React from "react"

import DrawerButton from  '../components/drawer-button'
const MainMenu = props => (
  <header>
  <nav className="main-menu">
    <DrawerButton click={props.drawerClickHandler}/>
    <div><a href="/"><img src="../images/difd-menu-logo.png" alt="the logo for DIFD"/></a></div>
    <div className="topnav new-menu" id="myTopnav">
      <a href="https://apply.winthrop.edu/apply/" className="apply-now">Apply Now</a>
      <div className="dropdown">
        <button className="dropbtn">
          Our People
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/our-people/#professors"
                state={{prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Professors
          </Link>
          <Link to="/our-people/#graduates"
                state={{prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Our Graduates
          </Link>
        </div>
      </div>
      <Link to="/student-work#top"
            state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
              Student Work
      </Link>
      <div className="dropdown">
        <button className="dropbtn">DIFD Tracks
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/commerce#top"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Digital Commerce
          </Link>
          <Link to="/massmedia#top"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Digital Mass Media
          </Link>
          <Link to="/interactivemedia#top"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Interactive Media
          </Link>
          <Link to="/webapps#top"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Web Applications
          </Link>
        </div>
      </div>
      <Link to="/#top"
            state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
            className="active">
              About
      </Link>
    </div>
  </nav>
  </header>
);

export default MainMenu
