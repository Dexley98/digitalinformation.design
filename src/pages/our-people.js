import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// bring in component files
import MainMenu from '../components/main-menu'
import Footer from '../components/footer'
import Apply from '../components/apply'
import Professor from '../components/professor'
import LongGrad from '../components/longGrad'

// stuff for responsive drop down
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'

import "../css/layout.css"

export default class OurPeople extends Component {

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
    };
  
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    render() {
        let sideDrawer = null;
        let backDrop = null;
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }
        
        const {
            bannerImage,
            ourPeopleOverview,
            professorsOverview,
            graduatesOverview
        } = this.props.data.allContentfulOurPeoplePage.nodes[0]

        const profList = this.props.data.allContentfulProfessor.edges
        const gradList = this.props.data.allContentfulGraduate.edges

        return (
            <div>
            <MainMenu drawerClickHandler={this.drawerToggleClickHandler}/>
            {sideDrawer}
            {backDrop}
                <section className="ourPeople-bannerImg-block" id="top">
                    <img src={bannerImage.file.url} alt={bannerImage.description} />
                </section>
                <section className="ourPeople-overview-block">
                    <h1 className="ourPeople-header">OUR PEOPLE</h1>
                    <p className="ourPeople-header">{ourPeopleOverview.ourPeopleOverview}</p>
                </section>
                <section className="ourPeople-professors-block">
                  <div className="top-curve"></div>
                  <div className="middle-bg">
                    <div className="professors-title">
                      <h2>MEET THE PROFESSORS</h2>
                      <p>{professorsOverview.professorsOverview}</p>
                    </div>
                    <div className="prof-blob-container">
                    {profList.map( (index) => {
                        return(
                            <Professor
                                profPicture={index.node.profPicture}
                                profName={index.node.profName}
                                bio={index.node.bio}
                            />
                        )
                    })}
                    </div>
                    </div>
                    <div className="bottom-curve"></div>
                </section>
                <section className="ourPeople-graduates-block">
                  <div className="graduates-title">
                    <h2>MEET THE GRADUATES</h2>
                    <p>{graduatesOverview.graduatesOverview}</p>
                </div>
                    {gradList.map( (index) =>{
                        return(
                            <LongGrad
                                jobTitle={index.node.jobTitle}
                                gradPicture={index.node.gradPicture}
                                gradName={index.node.gradName}
                                gradDate={index.node.gradDate}
                                whereAreTheyNow={index.node.whereAreTheyNow}
                                DifdPrep={index.node.DifdPrep}
                            />
                        )
                    })}
                </section>
                <Apply />
            <Footer />
            </div>
        )
    }
}

OurPeople.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
    query ourPeoplePageQuery {

        allContentfulOurPeoplePage {
            nodes {
                bannerImage {
                    description
                    file {
                        url
                    }
                }
                ourPeopleOverview{
                    ourPeopleOverview
                }
                professorsOverview {
                    professorsOverview
                }
                graduatesOverview {
                    graduatesOverview
                }
            }
        }

        allContentfulProfessor {
            edges {
                node {
                    profPicture {
                        description
                        file {
                            url
                        }
                    }
                    profName
                    bio {
                        bio
                    }
                }
            }
        }

        allContentfulGraduate {
            edges {
              node {
                gradPicture {
                  description
                  file {
                    url
                  }
                }
                jobTitle
                gradName
                gradDate {
                  gradDate
                }
                whereAreTheyNow {
                  whereAreTheyNow
                }
                DifdPrep {
                  DifdPrep
                }
              }
            }
        }

    }
`
