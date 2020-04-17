import React, {Component} from "react"
import PropTypes from 'prop-types';
import { graphql, Link} from 'gatsby'

// Pull in Components
import MainMenu from "../components/main-menu"
import Footer from "../components/footer"
import QuestionsLink from '../components/questionsLink'
import Job from '../components/job'
import Grad from '../components/grad'
import Outcome from '../components/outcome'
import Apply from '../components/apply'
import ProjectBrief from '../components/projectBrief'
import CourseBlock from '../components/course'

// stuff for responsive drop down
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'

import "../css/layout.css"

class studentPage extends Component {

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


     render(){
        
        let sideDrawer = null;
        let backDrop = null;
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }

// Major content for page
        const {
          slug,
          concentrationTitle,
          taglineList,
          splashMedia,
          concentrationSummary,
          concentrationAsset,
          concentrationLogo,
          WhatDoesItMean,
          learningOutcomeAsset,
          learningOutcomesSummary
        } = this.props.data.contentfulConcentrationPageHome

// Campus info and assets
        const {
          whyWinthrop1,
          whyWinthrop2,
          whyWinthropAssets
        }  = this.props.data.contentfulWhyWinthrop
        const whyWinthropAsset1 = whyWinthropAssets[0];

// All Courses converted to array
        const allCourseObject = this.props.data.allContentfulCourse.edges
        const allCourseArray = getAllCourseArray(allCourseObject)

// Jobs, grads, learning outcomes, and student project info to pull into indiviudal components
        const jobList = this.props.data.allContentfulJob.edges
        const gradList = this.props.data.allContentfulGraduate.edges
        const learningOutcomeList = this.props.data.allContentfulLearningOutcome.edges
        const allTrackProjects = this.props.data.allContentfulProject.edges


        console.log(allTrackProjects)
/*******************************Start Debugging Block***************************************************
         for(var i = 0; i<taglineList.length; i++){
             console.log('tagline list number '+ i + ' ' + taglineList[i])
         }

         console.log('Job list', jobList)
         console.log('Grad List', gradList)
         console.log('Learning Outcome List ', learningOutcomeList)
         console.log('whyWinthropAssets', whyWinthropAsset1)
         console.log('splashMedia', splashMedia)
         console.log(this.props.data.allContentfulProject)
         console.log(this.props.data.allContentfulCourse)
**********************************End Debugging Block *************************************************/

         return(

             <div className="body">
             <MainMenu drawerClickHandler={this.drawerToggleClickHandler}/>
             {sideDrawer}
             {backDrop}

{/* Parent Nav */}
                <nav className="parent-link">
                  <p>Are you a parent?
                    <Link to={`${slug}/parents`}
                          state={{ prevPath: typeof window !== 'undefined' ? window.location.pathname : ''}}>
                            Click here!
                    </Link>
                  </p>
                </nav>

{/* Splash Media Section */}
                <section className="splashMedia-block">
                    <img className="hero-image" src={splashMedia[0].file.url} alt="splash media" />
                    <div className="tagline-item">
                        {taglineList.map((item) =>{
                          return(<h1>{item}</h1>);
                        })}
                    </div>
                </section>
                <QuestionsLink />

{/* Concentration Summary Section */}
                <section className="concentrationSummary-block">
                    <div className="background-shape"></div>
                    <h2>{concentrationTitle}</h2>
                    <p>{concentrationSummary}</p>
                </section>

{/* What Does it Mean Section */}
                <section className="whatDoesItMean-block">
                    <div>
                      <div className="meaning-image-background">
                        <img src={concentrationAsset.file.url} alt={concentrationAsset.description} className="meaning-image"/>
                      </div>
                        <img src={concentrationLogo.file.url} alt={concentrationLogo.description} className="meaning-logo" />
                    </div>
                    <div>
                      <h2>WHAT DOES IT MEAN?</h2>
                      <p>{WhatDoesItMean.WhatDoesItMean}</p>
                    </div>
                </section>

{/* Career Section (with Jobs) */}
                <section className="career-block">
                    <div></div>
                    <h2>CAREERS</h2>
                    <div className="job-blob-container">
                      {jobList.map((index) =>{
                        return(
                        <Job
                          jobTitle={index.node.title}
                          jobDesc={index.node.description.description}
                        />)
                      })}
                    </div>
                    <p>Do you want to learn more about the careers that our program can prepare you for?</p>
                    <p><Link to="/our-people"
                             className="main-link"
                             state={{ prevPath: typeof window !== 'undefined' ? window.location.pathname : ''}}>
                               View Careers
                        </Link>
                    </p>
                    <div></div>
                </section>

{/* Graduate Section */}
              { gradList.length > 0 &&
                  <section className="graduate-block">
                    <div className="top-curve"></div>
                    <div className="middle-bg">
                      <h2>HEAR FROM OUR GRADUATES</h2>
                      <p>See where past members of our program are today.</p>
                      <div className="grad-blob-container">
                        {gradList.map((index) =>{
                          return(
                          <Grad
                            imgSrc={index.node.gradPicture.file.url}
                            gradName={index.node.gradName}
                            jobTitle={index.node.jobTitle}
                            gradBio={index.node.bio.bio}
                          />)
                        })}
                      </div>
                    </div>
                    <div className="bottom-curve"></div>
                  </section>
              }

{/* Learning Outcome Section */}
                <section className="learningOutcomes-block">
                  <div className="learningOutcomes-info">
                    <div>
                      <h2>KEY LEARNING OUTCOMES</h2>
                      <p>{learningOutcomesSummary.learningOutcomesSummary}</p>
                    </div>
                    <img src={learningOutcomeAsset.file.url} alt={learningOutcomeAsset.description} />
                  </div>
                  <div className="learningOutcome-blob-container">
                      {learningOutcomeList.map((index) => {
                        return(
                        <Outcome
                          iconSrc={index.node.icon.file.url}
                          description={index.node.description.description}
                        />)
                      })}
                  </div>
                </section>

{/* Student Work Section (conditional on length of published student work from contentful */}
                {allTrackProjects.length > 0 &&
                  <section className="student-work-block">
                    <h2>STUDENT WORK</h2>
                    <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                    <div className="projectBrief-container">
                    {allTrackProjects.map((index) =>{
                      return(
                          <ProjectBrief title={index.node.title} shortDesc={index.node.shortDescription} projectMedia={index.node.projectMedia}/>
                        )
                    })}
                    </div>
                  </section>
                }


{/* Coursework Section */}
                <section className="coursework-block">
                  <div className="coursework-block-title">
                    <h2>COURSEWORK</h2>
                    <p>Here's a taste of the classes you may take while in DIFD.</p>
                  </div>
                  <CourseBlock courseList={allCourseArray} slug={slug} className="course-selector"/>
                </section>

{/* Why Winthrop? Section */}
                <section className="why-winthrop-block">
                  <div>
                    <h2>WHY CHOOSE WINTHROP'S PROGRAM?</h2>
                    <p>{whyWinthrop1.whyWinthrop1}</p>
                    <p>{whyWinthrop2.whyWinthrop2}</p>
                  </div>
                  <p className="why-button">
                    <Link to="/#tour"
                          className="main-link"
                          state={{ prevPath: typeof window !== 'undefined' ? window.location.pathname : ''}}>
                      Learn More
                    </Link>
                  </p>
                  <img src={whyWinthropAsset1.file.url} />
                  {/*Should this link go to about or to winthrop? */}

                </section>

                <Apply />
                <Footer />
             </div>
         )
/* END OF RETURN */

// put all courses into an array so that it can be pushed as a prop.
         function getAllCourseArray(courseObject){
           let allCourseArray = []
           courseObject.map((index) => {
             allCourseArray.push(index.node)
           })
           return allCourseArray
         }
     }
/* END OF RENDER */

}
/* END OF STUDENT TEMPLATE CLASS */


studentPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default studentPage

export const pageQuery = graphql`
query studentPageQuery($slug: String!){

  contentfulConcentrationPageHome(slug: {eq: $slug}) {
      id
      slug
      concentrationTitle
      taglineList
      splashMedia {
        file {
          url
        }
      }
      concentrationSummary
      concentrationAsset {
        description
        file {
          url
        }
      }
      concentrationLogo{
        description
        file{
          url
        }
      }
      WhatDoesItMean {
        WhatDoesItMean
      }
      learningOutcomeAsset {
        description
        file {
          url
        }
      }
      learningOutcomesSummary {
        learningOutcomesSummary
      }
    }

    allContentfulJob(filter: {slugMatch: {eq: $slug}}) {
      edges {
        node {
          slugMatch
          title
          description {
            description
          }
        }
      }
    }

    allContentfulGraduate(filter: {concentration: {eq: $slug}}) {
      edges {
        node {
          concentration
          gradPicture {
            file {
              url
            }
          }
          gradName
          jobTitle
          bio {
            bio
          }
        }
      }
    }

    allContentfulLearningOutcome(filter: {concentration: {eq: $slug}}) {
      edges {
        node {
          concentration
          icon {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }

    allContentfulProject(filter: {concentrationTag: {eq: $slug}}) {
      edges {
        node {
          concentrationTag
          title
          shortDescription
          projectMedia {
            description
            file{
              contentType
              url
            }
          }
        }
      }
    }

    allContentfulCourse {
      edges {
        node {
          coreCompetency
          coreElective
          designator
          name
          hours
        }
      }
    }

    contentfulWhyWinthrop {
      whyWinthrop1{
        whyWinthrop1
      }
      whyWinthrop2{
        whyWinthrop2
      }
      whyWinthropAssets {
        description
        file{
          url
        }
      }
    }
}`
