import { Link } from "gatsby"
import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Link to="/">About the Major</Link>
          <Link to="/#tour">Visit Winthrop</Link>
        </div>
        <div>
          <Link to="/commerce">Digital Commerce</Link>
          <Link to="/massmedia">Digital Mass Media</Link>
          <Link to="/interactivemedia">Interactive Media</Link>
          <Link to="/webapps">Web Applications</Link>
        </div>
        <div>
          <Link to="/student-work">Student Work</Link>
          <Link to="#">Our Grads</Link>
          <a href="https://apply.winthrop.edu/apply/">Apply Now</a>
        </div>
      </div>
    )
  }
}

export default Footer
