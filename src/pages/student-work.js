// bring in packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// bring in component files.
import MainMenu from '../components/main-menu'
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'
import Footer from '../components/footer'
import Apply from '../components/apply'
import ProjectsBlock from '../components/project'

import "../css/layout.css"

export default class StudentWork extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideDrawerOpen: false, 
      previousPageSlug: props.location.state !== undefined ? props.location.state.prevPath : '/commerce'
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

    trimPrevPath(prevPath){
      const concentrationList = ["massmedia", "commerce", "interactivemedia", "webapps"]
      let prevPathArray = prevPath.split("/")
      let concentrationSlug = undefined
      if(concentrationList.includes(prevPathArray[1])){
          concentrationSlug = prevPathArray[1]
      }else{
          return concentrationSlug
      }
      return concentrationSlug
  }

    render() {
      let sideDrawer = null;
      let backDrop = null;
      if (this.state.sideDrawerOpen) {
        sideDrawer = <SideDrawer />
        backDrop = <BackDrop click={this.backdropClickHandler}/>
      }

        const {
            studentWorkBannerImage,
            studentWorkOverview
        } = this.props.data.allContentfulStudentWorkPage.nodes[0]

        const allProjectObject = this.props.data.allContentfulProject.edges
        const allProjectArray = getAllProjectArray(allProjectObject)

        return (
            <div id="top">
              <MainMenu drawerClickHandler={this.drawerToggleClickHandler}/>
              {sideDrawer}
              {backDrop}
      
                <section className="bannerImage-block" >
                    <img src={studentWorkBannerImage.file.url} alt={studentWorkBannerImage.description}/>
                </section>
                <section className="studentWork-overview-block" id="projects">
                    <h1 className="student-work-header">STUDENT WORK</h1>
                    <p>{studentWorkOverview.studentWorkOverview}</p>
                </section>
                <section className="projects-block">
                    {this.state.previousPageSlug !== undefined && 
                      <ProjectsBlock allProjectArray={allProjectArray} previousPageSlug={this.trimPrevPath(this.state.previousPageSlug)}/>
                    }
                </section>
                <Apply />
                <Footer />
            </div>
        )
/* END OF RETURN */

// put all projects into an array so that it can be pushed as a prop
        function getAllProjectArray(projectObject){
            let allProjectArray = []
            projectObject.map((index) => {
                allProjectArray.push(index.node)
            })
            return allProjectArray
        }
    }
/* END OF RENDER */

}
/* END OF STUDENT WORK CLASS */

StudentWork.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query studentWorkPageQuery {

    allContentfulAboutPage {
        nodes {
            imBlurb {
                imBlurb
            }
            webAppsBlurb {
                webAppsBlurb
            }
            commerceBlurb {
                commerceBlurb
            }
            massMediaBlurb {
                massMediaBlurb
            }
        }
    }

    allContentfulStudentWorkPage {
        nodes {
          studentWorkBannerImage {
            description
            file {
              url
            }
          }
          studentWorkOverview {
            studentWorkOverview
          }
          capstoneImage {
            description
            file {
              url
            }
          }
          capstoneSummary {
            capstoneSummary
          }
        }
    }

    allContentfulProject {
        edges {
          node {
            concentrationTag
            title
            description{
              description
            }
            projectMedia {
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
