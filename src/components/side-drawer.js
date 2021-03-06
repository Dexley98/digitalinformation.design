import { Link } from "gatsby"
import React from "react"

const SideDrawer = props => (
  <nav className="side-drawer">
  <div className="side-topnav side-drawer" id="myTopnav">
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
          className="active">
            About
    </Link>
  </div>
  </nav>
);

export default SideDrawer
