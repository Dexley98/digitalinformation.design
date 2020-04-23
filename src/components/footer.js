import { Link } from "gatsby"
import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Link to="/#top"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  About the Major
          </Link>
          <Link to="/#tour"
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                  Visit Winthrop
          </Link>
        </div>
        <div>
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
        <div>
          <Link to="/student-work#top" className="bad-link"
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
