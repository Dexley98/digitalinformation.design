import { Link } from "gatsby"
import React from "react"

/* 
This Component Renders all of the links and info located in the footer of the page. 
*/

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Link to="/"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  About the Major
          </Link>
          <Link to="/#tour"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Visit Winthrop
          </Link>
        </div>
        <div>
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
        <div>
          <Link to="/student-work" className="bad-link"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Student Work
          </Link>
          <Link to="/our-people#graduates" className="bad-link"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Our Grads
          </Link>
          <a href="https://apply.winthrop.edu/apply/">Apply Now</a>
        </div>
      </div>
    )
  }
}

export default Footer
