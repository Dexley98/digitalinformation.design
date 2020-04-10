// bring in packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// bring in component files. 
import Menu from '../components/main-menu'
import Footer from '../components/footer'
import Apply from '../components/apply'
import Track from '../components/track'
import ProjectsBlock from '../components/project'

export default class StudentWork extends Component {
    render() {
        const {
            studentWorkBannerImage,
            studentWorkOverview,
            capstoneImage,
            capstoneSummary
        } = this.props.data.allContentfulStudentWorkPage.nodes[0]

        const {
            imBlurb,
            webAppsBlurb,
            commerceBlurb,
            massMediaBlurb
        } = this.props.data.allContentfulAboutPage.nodes[0]

        const allProjectObject = this.props.data.allContentfulProject.edges
        const allProjectArray = getAllProjectArray(allProjectObject)
        console.log(allProjectArray)
        const previousPageSlug = trimPrevPath(this.props.location.state.prevPath)

        return (
            <div>
                <Menu />
                <section className="bannerImage-block">
                    <img src={studentWorkBannerImage.file.url} alt={studentWorkBannerImage.description}/>
                </section>
                <section className="studentWork-overview-block">
                    <h1>STUDENT WORK</h1>
                    <p>{studentWorkOverview.studentWorkOverview}</p>
                </section>
                <section className="projects-block">
                    <ProjectsBlock allProjectArray={allProjectArray} previousPageSlug={previousPageSlug}/>
                </section>
                <section className="capstone-block">
                    <h1>CAPSTONE</h1>
                    <div className="capstone-block-image">
                        <img src={capstoneImage.file.url} alt={capstoneImage.description} />
                    </div>
                    <p>{capstoneSummary.capstoneSummary}</p>
                </section>
                <section className="tracks-block">
                    <Track slug="/interactivemedia" overview={imBlurb.imBlurb} />
                    <Track slug="/webapps" overview={webAppsBlurb.webAppsBlurb} />
                    <Track slug="/commerce" overview={commerceBlurb.commerceBlurb} />
                    <Track slug="/massmedia" overview={massMediaBlurb.massMediaBlurb} />
                </section>
                <Apply />
                <Footer />
            </div>
        )
/* END OF RETURN */

        function trimPrevPath(prevPath){
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