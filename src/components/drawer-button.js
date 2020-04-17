import { Link } from "gatsby"
import React from "react"

const DrawerButton = props => (
  <button className="drop-down-button" onClick={props.click}>
    &#9776;
  </button>
);

export default DrawerButton
