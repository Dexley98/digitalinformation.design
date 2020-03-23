import React, {Component} from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


class Test extends Component {
     render(){
         const {
            slug,
            tagline,
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
                    <img src={splashMedia[0].fluid.src} alt="splash media" />
                    <h2>{tagline}</h2>
                    <h1>{taglineList[2]}</h1>
                </section>
                <section className="concentrationSummary-block">
                    <h2>{slug}</h2>
                    <p>{concentrationSummary}</p>
                </section>
                <section className="whatDoesItMean-block">
                    <img src={concentrationAsset.fluid.src} alt={concentrationAsset.description} />
                    <h2>WHAT DOES IT MEAN?</h2>
                    <p>{WhatDoesItMean.WhatDoesItMean}</p>
                </section>
                <section className="career-block">
                    <h2>CAREERS</h2>
                    <p>THIS IS GOING TO BE WHERE THE CAREER COMPONENTS GO.</p>
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
                    <img src={learningOutcomeAsset.fluid.src} alt={learningOutcomeAsset.description} />
                    <p>LEARNING OUTCOMES COMPONENTS WILL GO HERE.</p>
                </section>
                 
             </div>
         )
     }
}

Test.propTypes = {
    data: PropTypes.object.isRequired
}

export default Test

export const pageQuery = graphql`
query concentrationPageHomeQuery($slug: String!){
    contentfulConcentrationPageHome(slug: {eq: $slug}) {
      tagline
      taglineList
      splashMedia {
        fluid {
          src
        }
      }
      slug
      concentrationSummary
      concentrationAsset {
        fluid {
          src
        }
        description
      }
      WhatDoesItMean {
        WhatDoesItMean
      }
      learningOutcomeAsset {
        description
        fluid {
          src
        }
      }
      learningOutcomesSummary {
        learningOutcomesSummary
      }
    }
  }`
  