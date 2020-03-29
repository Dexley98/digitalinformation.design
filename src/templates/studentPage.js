import React, {Component} from "react"
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Menu from "../components/main-menu"
import Footer from "../components/footer"
import Job from '../components/job'


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

         for(var i = 0; i<taglineList.length; i++){
             console.log('tagline list number '+ i + ' ' + taglineList[i])
         }

         //console.log(splashMedia)

         console.log('Job list', jobList)

         return(

             <div>
             <Menu />
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
                    <h2>{concentrationTitle}</h2>
                    <p>{concentrationSummary}</p>
                </section>
                <section className="whatDoesItMean-block">
                    <img src={concentrationAsset.fixed.src} alt={concentrationAsset.description} />
                    <div>
                      <h2>WHAT DOES IT MEAN?</h2>
                      <p>{WhatDoesItMean.WhatDoesItMean}</p>
                    </div>
                </section>
                <section className="career-block">
                    <h2>CAREERS</h2>
                    <div className="job-blob-container">
                    {jobList.map((index) =>{
                      return(<Job jobTitle={index.node.title} jobDesc={index.node.description.description}/>)
                    })}
                    </div>
                    <p>Do you want to learn more about the careers that our program can prepare you for?</p>
                    <p>LINK WILL GO HERE.</p>
                </section>
                <section className="graduate-block">
                    <h2>HEAR FROM OUR GRADUATES</h2>
                    <p>LOREM IPSUM IS HERE CURRENTLY. DESCRIBE THE CAREERS YO.</p>
                    <p>THIS IS GOING TO BE WHERE THE GRADUATES COMPONENTS WILL GO.</p>
                </section>
                <section className="learningOutcomes-block">
                    <h2>KEY LEARNING OUTCOMES</h2>
                    <p>{learningOutcomesSummary.learningOutcomesSummary}</p>
                    <img src={learningOutcomeAsset.fixed.src} alt={learningOutcomeAsset.description} />
                    <p>LEARNING OUTCOMES COMPONENTS WILL GO HERE.</p>
                </section>
                <section className="student-work-block">
                  <h3>STUDENT WORK</h3>
                  <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                  <p>STUDENT WORK COMPONENTS WILL GO HERE.</p>
                </section>
                <section className="coursework-block">
                  <p>Here's a taste of the classes you may take while in DIFD.</p>
                  <p>BIG ASS BLOCK OF COURSES WILL GO HERE.</p>
                </section>
                <section className="apply-now-block">
                  <h3>APPLY NOW</h3>
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
}`
