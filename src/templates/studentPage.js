import React, {Component} from "react"
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'



class studentPage extends Component {
     render(){
      const {
        slug,
        taglineList,
        splashMedia,
        concentrationSummary,
        concentrationAsset,
        WhatDoesItMean,
        learningOutcomeAsset,
        learningOutcomesSummary
      } = this.props.data.contentfulConcentrationPageHome
      
    

         for(var i = 0; i<taglineList.length; i++){
             console.log('tagline list number '+ i + ' ' + taglineList[i])
         }

         console.log(splashMedia)

         return(
             <div>
                <section className="splashMedia-block">
                    <img src={splashMedia[0].fixed.src} alt="splash media" />
                    <div className="word-container">
                        {taglineList.map((item) =>{
                          console.log('WHAT IS INSIDE TAGLINE LIST', item);
                          return(<h1>{item}</h1>);
                        })}
                    </div>
                </section>
                <section className="concentrationSummary-block">
                    <h3>{slug}</h3>
                    <p>{concentrationSummary}</p>
                </section>
                <section className="whatDoesItMean-block">
                    <img src={concentrationAsset.fixed.src} alt={concentrationAsset.description} />
                    <h3>WHAT DOES IT MEAN?</h3>
                    <p>{WhatDoesItMean.WhatDoesItMean}</p>
                </section>
                <section className="career-block">
                    <h3>CAREERS</h3>
                    <p>THIS IS GOING TO BE WHERE THE CAREER COMPONENTS GO.</p>
                    <p>Do you want to learn more about the careers that our program can prepare you for?</p>
                    <p>LINK WILL GO HERE.</p>
                </section>
                <section className="graduate-block">
                    <h3>HEAR FROM OUR GRADUATES</h3>
                    <p>LOREM IPSUM IS HERE CURRENTLY. DESCRIBE THE CAREERS YO.</p>
                    <p>THIS IS GOING TO BE WHERE THE GRADUATES COMPONENTS WILL GO.</p>
                </section>
                <section className="learningOutcomes-block">
                    <h3>KEY LEARNING OUTCOMES</h3>
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
             </div>
         )
     }
}

studentPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default studentPage

export const pageQuery = graphql`
query concentrationPageHomeQuery($slug: String!){
    contentfulConcentrationPageHome(slug: {eq: $slug}) {
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
  }`
  