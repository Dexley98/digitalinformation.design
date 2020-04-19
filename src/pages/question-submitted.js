import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql} from 'gatsby'

import MainMenu from '../components/main-menu'
import Footer from '../components/footer'

// stuff for responsive drop down
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'

import "../css/layout.css"

export default class QuestionSubmitted extends Component {

    constructor(props){
        super(props)
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

    render() {

        let sideDrawer = null;
        let backDrop = null;
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }

        let randomImageIndex = Math.floor(Math.random() * Math.floor(4));
        const randomImage = this.props.data.allContentfulConcentrationPageHome.edges[randomImageIndex].node.concentrationAsset
        console.log(randomImage)

        return (
            <div class="main-container">
            <MainMenu drawerClickHandler={this.drawerToggleClickHandler}/>
            {sideDrawer}
            {backDrop}
                <section className="random-image-block" id="top">
                    <img src={randomImage.file.url} alt={randomImage.description} />
                </section>
                <section className="question-received-block">
                    <h1>THANK YOU!</h1>
                    <p>Someone on our team will get back to you ASAP!</p>
                    <Link to="/"
                          state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
                          className="main-link">
                              Home
                    </Link>
                </section>
            <Footer />
            </div>
        )
    }
}

QuestionSubmitted.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql `
    query sumbissionPageQuery{

        allContentfulConcentrationPageHome {
            edges {
              node {
                concentrationAsset {
                  description
                  file {
                    url
                  }
                }
              }
            }
        }
    }
`
