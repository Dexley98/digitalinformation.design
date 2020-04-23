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

          <h1>Fiddle Sticks!</h1>
          <h3>Are you lost?</h3>
          <p>You're looking for something that doesn't exist...</p>
          <br/>
          <p>Try going to our homepage.</p>
          <p><Link to='/#top'
              state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
              className="main-link">
                GO
          </Link></p>
          <Footer />
        </div>
      )
    }
    
    
}


export default NotFoundPage
