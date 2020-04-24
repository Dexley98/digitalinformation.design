import React, {Component} from "react"
import {Link} from 'gatsby'

import MainMenu from '../components/main-menu'
import Footer from '../components/footer'
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'

import "../css/layout.css"

class NotFoundPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        sideDrawerOpen: false
      }
    }

    drawerToggleClickHandler = () =>{
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
    }

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false})
    }

    render(){

      let sideDrawer = null;
      let backDrop = null;
      if (this.state.sideDrawerOpen) {
        sideDrawer = <SideDrawer />
        backDrop = <BackDrop click={this.backdropClickHandler}/>
      }

      return(
        <div>
          <MainMenu drawerClickHandler={this.drawerToggleClickHandler}/>
          {sideDrawer}
          {backDrop}
          <div className="lost-section">
            <h1 className="lost-header">Nothing to See Here!</h1>
            <p>Are you lost? You're looking for something that doesn't exist...</p>
            <br/>
            <p>Try going to our homepage.</p>
            <p><Link to='/#top'
                state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
                className="main-link">
                  GO
            </Link></p>
          </div>
          <Footer />
        </div>
      )
    }


}


export default NotFoundPage
