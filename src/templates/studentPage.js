import React, {Component} from "react"
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Menu from "../components/main-menu"
import Footer from "../components/footer"

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
                    <h2>{slug}</h2>
                    <p>{concentrationSummary}</p>
                </section>
                <section className="whatDoesItMean-block">
                    <img src={concentrationAsset.fixed.src} alt={concentrationAsset.description} />
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
                    <img src={learningOutcomeAsset.fixed.src} alt={learningOutcomeAsset.description} />
                    <p>LEARNING OUTCOMES COMPONENTS WILL GO HERE.</p>
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
