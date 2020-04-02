import React, {Component} from "react"
import PropTypes from 'prop-types';
import { graphql, navigate, Link} from 'gatsby'

import Menu from "../components/main-menu"
import Footer from "../components/footer"
import Job from '../components/job'
import Grad from '../components/grad'
import Outcome from '../components/outcome'


class studentPage extends Component {
     render(){
      const {
        slug,
        concentrationTitle,
        taglineList,
        splashMedia,
        concentrationSummary,
        concentrationAsset,
        WhatDoesItMean,
        learningOutcomeAsset,
        learningOutcomesSummary
      } = this.props.data.contentfulConcentrationPageHome

      const jobList = this.props.data.allContentfulJob.edges
      const gradList = this.props.data.allContentfulGraduate.edges
      const learningOutcomeList = this.props.data.allContentfulLearningOutcome.edges

         for(var i = 0; i<taglineList.length; i++){
             console.log('tagline list number '+ i + ' ' + taglineList[i])
         }

         //console.log(splashMedia)

         console.log('Job list', jobList)
         console.log('Grad List', gradList)
         console.log('Learning Outcome List ', learningOutcomeList)

         return(

             <div>
             <Menu />
                <nav>
                  <p>Are you a parent? <Link to={`${slug}/parents`}>Click here!</Link></p>
                </nav>
                <section className="splashMedia-block">
                    <img className="hero-image" src={splashMedia[0].fixed.src} alt="splash media" />
                    <div className="tagline-item">
                        {taglineList.map((item) =>{
                          console.log('WHAT IS INSIDE TAGLINE LIST', item);
                          return(<h1>{item}</h1>);
                        })}
                    </div>
                </section>
                <section className="concentrationSummary-block">
                    <div className="background-shape"></div>
                    <h2>{concentrationTitle}</h2>
                    <p>{concentrationSummary}</p>
                </section>
                <section className="whatDoesItMean-block">
                    <img src={concentrationAsset.fixed.src} alt={concentrationAsset.description} className=""/>
                    <div>
                      <h2>WHAT DOES IT MEAN?</h2>
                      <p>{WhatDoesItMean.WhatDoesItMean}</p>
                    </div>
                </section>
                <section className="career-block">
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
                    <p><a href="" className="learn-more">LINK WILL GO HERE.</a></p>
                </section>
                <section className="graduate-block">
                    <h2>HEAR FROM OUR GRADUATES</h2>
                    <p>See where past members of our program are today.</p>
                    <div className="grad-blob-container">
                      {gradList.map((index) =>{
                        return(
                        <Grad 
                          imgSrc={index.node.picture.fixed.src} 
                          gradName={index.node.name} 
                          jobTitle={index.node.jobTitle} 
                          gradBio={index.node.bio.bio} 
                        />)
                      })}
                    </div>
                </section>
                <section className="learningOutcomes-block">
                  <div className="learningOutcomes-info">
                    <div>
                      <h2>KEY LEARNING OUTCOMES</h2>
                      <p>{learningOutcomesSummary.learningOutcomesSummary}</p>
                    </div>
                    <img src={learningOutcomeAsset.fixed.src} alt={learningOutcomeAsset.description} />
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
                <section className="student-work-block">
                  <h2>STUDENT WORK</h2>
                  <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                  <p>STUDENT WORK COMPONENTS WILL GO HERE.</p>
                </section>
                <section className="coursework-block">
                  <p>Here's a taste of the classes you may take while in DIFD.</p>
                  <p>BIG ASS BLOCK OF COURSES WILL GO HERE.</p>
                </section>
                <section className="apply-now-block">
                  <h2>APPLY NOW</h2>
                  <p>Interested? Put your future on the right track today!</p>
                  <p>APPLY NOW LINK WILL GO HERE.</p>
                </section>
                <Footer />
             </div>
         )
     }
}

studentPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default studentPage

export const pageQuery = graphql`
query jobQueryAndConcentrationPageHomeQuery($slug: String!){

  contentfulConcentrationPageHome(slug: {eq: $slug}) {
      id
      slug
      concentrationTitle
      taglineList
      splashMedia {
        fixed {
          src
        }
      }
      slug
      concentrationSummary
      concentrationAsset {
        description
        fixed {
          src
        }
      }
      WhatDoesItMean {
        WhatDoesItMean
      }
      learningOutcomeAsset {
        description
        fixed {
          src
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
            fixed {
              src
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



}`
