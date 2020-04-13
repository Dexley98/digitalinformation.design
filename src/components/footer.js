import { Link } from "gatsby"
import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Link to="/"
                state={{ prevPath: window.location.pathname}}>
                  About the Major
          </Link>
          <Link to="/#tour"
                state={{ prevPath: window.location.pathname}}>
                  Visit Winthrop
          </Link>
        </div>
        <div>
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
        <div>
          <Link to="/student-work"
                state={{ prevPath: window.location.pathname}}>
                  Student Work
          </Link>
          <Link to="/our-people#graduates"
                state={{ prevPath: window.location.pathname}}>
                  Our Grads
          </Link>
          <a href="https://apply.winthrop.edu/apply/">Apply Now</a>
        </div>
      </div>
    )
  }
}

export default Footer
