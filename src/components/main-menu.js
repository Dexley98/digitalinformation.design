import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Menu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    );
  }
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
