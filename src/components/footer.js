import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <a href="#">About the Major</a>
          <a href="#">Visit Winthrop</a>
        </div>
        <div>
          <a href="#">Digital Commerce</a>
          <a href="#">Digital Mass Media</a>
          <a href="#">Interactive Media</a>
          <a href="#">Web Applications</a>
        </div>
        <div>
          <a href="#">Student Work</a>
          <a href="#">Our Grads</a>
          <a href="#">Apply Now</a>
        </div>
      </div>
    );
  }
}

export default Footer
