import React, {Component} from "react"
import PropTypes from 'prop-types';
import { graphql, navigate, Link} from 'gatsby'

import Menu from "../components/main-menu"
import Footer from "../components/footer"
import Job from '../components/job'
import Grad from '../components/grad'
import Outcome from '../components/outcome'
import Apply from '../components/apply'
import ProjectBrief from '../components/projectBrief'
import CourseBlock from '../components/course'

class studentPage extends Component {
     render(){
// major content for page
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

// campus info and assets
        const {
          whyWinthrop1,
          whyWinthropAssets
        }  = this.props.data.contentfulWhyWinthrop
        const whyWinthropAsset1 = whyWinthropAssets[0];

// student project 'meta' info
        const allTrackProjects = this.props.data.allContentfulProject.edges

// all course object declared then converted to array
        const allCourseObject = this.props.data.allContentfulCourse.edges
        const allCourseArray = getAllCourseArray(allCourseObject)

// job, grads, and learning outcomes to pull into indiviudal components
        const jobList = this.props.data.allContentfulJob.edges
        const gradList = this.props.data.allContentfulGraduate.edges
        const learningOutcomeList = this.props.data.allContentfulLearningOutcome.edges



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
             <Menu />

{/* Parent Nav */}                
                <nav className="hide">
                  <p>Are you a parent? <Link to={`${slug}/parents`}>Click here!</Link></p>
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
                    <p><a href="" className="main-link">LINK WILL GO HERE.</a></p>
                    <div></div>
                </section>
                
{/* Graduate Section */}                
                <section className="graduate-block">
                    <h2>HEAR FROM OUR GRADUATES</h2>
                    <p>See where past members of our program are today.</p>
                    <div className="grad-blob-container">
                      {gradList.map((index) =>{
                        return(
                        <Grad
                          imgSrc={index.node.picture.file.url}
                          gradName={index.node.name}
                          jobTitle={index.node.jobTitle}
                          gradBio={index.node.bio.bio}
                        />)
                      })}
                    </div>
                </section>
                
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
                
{/* Student Work Section*/}                
                <section className="student-work-block">
                  <h2>STUDENT WORK</h2>
                  <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                  {allTrackProjects.map((index) =>{
                    return(
                      <ProjectBrief title={index.node.title} shortDesc={index.node.shortDescription} projectMedia={index.node.projectMedia}/>
                      )
                  })}
                </section>
                
{/* Coursework Section */}               
                <section className="coursework-block">
                  <p>Here's a taste of the classes you may take while in DIFD.</p>
                  <CourseBlock courseList={allCourseArray} slug={slug}/>
                </section>
                
{/* Why Winthrop? Section */}                
                <section className="why-winthrop-block">
                  <h2>WHY CHOOSE WINTHROP'S PROGRAM?</h2>
                  <p>{learningOutcomesSummary.learningOutcomesSummary}</p>
                  <p>{whyWinthrop1.whyWinthrop1}</p>
                  <img src={whyWinthropAsset1.file.url} />
                  {/*Should this link go to about or to winthrop? */}
                  <p><Link to="/about#tour" className="main-link">Learn More</Link></p>
                </section>
                
                <Apply />
                <Footer />
             </div>
         )

// put all courses into an array so that it can be pushed as a prop.
         function getAllCourseArray(courseObject){
           let allCourseArray = []
           courseObject.map((index) => {
             allCourseArray.push(index.node)
           })
           return allCourseArray;
         }
     }
}

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
          picture {
            file {
              url
            }
          }
          name
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
      whyWinthropAssets {
        description
        file{
          url
        }
      }
    }
}`
