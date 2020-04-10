// bring in packages.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// bring in component files.
import Menu from '../components/main-menu'
import Footer from '../components/footer'
import Grad from '../components/grad'
import Track from '../components/track'
import Outcome from '../components/outcome'
import Apply from '../components/apply'

export default class About extends Component {
    render() {
        // should only be one, that why the assignment at the bottom of this const statement
        const {
            bannerImage,
            whatIsDifd,
            tracksOverview,
            imBlurb,
            webAppsBlurb,
            commerceBlurb,
            massMediaBlurb,
            whyAsset,
        } = this.props.data.allContentfulAboutPage.edges[0].node

        const allGraduates = this.props.data.allContentfulGraduate.edges;
        const allLearningOutcomes = this.props.data.allContentfulLearningOutcome.edges;

        const randomGradsList = getRandomGrads(allGraduates);

        const {
          whyWinthrop1,
          whyWinthrop2,
          whyWinthropAssets
        }  = this.props.data.contentfulWhyWinthrop


        const whyWinthropAsset1 = whyWinthropAssets[0]
        const whyWinthropAsset2 = whyWinthropAssets[1]

        return(
            <div>
            <Menu />
                <section className="about-bannerImg-block">
                    <img src={bannerImage.file.url} alt={bannerImage.description} />
                </section>
                <section className="what-is-difd-block">
                    <h1 className="about-header">WHAT IS <span className="purple-highlight">DIFD</span></h1>
                    <h3>(Digital Information Design)</h3>
                    <p>{whatIsDifd.whatIsDifd}</p>
                </section>
                <section className="tracks-block">
                  <div className="top-curve"></div>
                    <div className="middle-bg">
                      <h1 className="about-header">FOUR TRACKS</h1>
                      <p>{tracksOverview.tracksOverview}</p>
                      <div className="tracks-container">
                         <Track slug="/interactivemedia" overview={imBlurb.imBlurb} />
                         <Track slug="/webapps" overview={webAppsBlurb.webAppsBlurb} />
                         <Track slug="/commerce" overview={commerceBlurb.commerceBlurb} />
                         <Track slug="/massmedia" overview={massMediaBlurb.massMediaBlurb} />
                      </div>
                      </div>
                    <div className="bottom-curve"></div>
                </section>
                <section className="why-difd-block">
                    <h1 className="about-header">WHY CHOOSE DIFD?</h1>
                    <img src={whyAsset.file.url} alt={whyAsset.description} />
                </section>
                <section className="learningOutcome-block top-padding">
                    <h2>KEY LEARNING OUTCOMES</h2>
                    <div className="learningOutcome-blob-container">
                    {allLearningOutcomes.map((index) => {
                        if(index.node.concentration.length == 4){
                            return(
                                <Outcome
                                  iconSrc={index.node.icon.file.url}
                                  description={index.node.description.description}
                                  />)
                        }
                    })}
                    </div>
                </section>
                <section className="graduates-block top-padding">
                    <h2>LET OUR GRADUATES TELL YOU WHY</h2>
                    <div className="grad-blob-container">
                    {randomGradsList.map((index) =>{
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
                <section id="tour" className="why-winthrop-block">
                  <div>
                    <h2>OUR CAMPUS</h2>
                    {/*top content */}
                    <p>{whatIsDifd.whatIsDifd}</p>
                    <p>{whyWinthrop1.whyWinthrop1}</p>
                  </div>
                  <img src={whyWinthropAsset1.file.url} alt={whyWinthropAsset2.description} />
                  {/*bpttom content */}
                  <img src={whyWinthropAsset2.file.url} alt={whyWinthropAsset2.description} />
                  <div>
                    <p>{whyWinthrop2.whyWinthrop2}</p>
                    <p>If you can’t make it out to see our campus we can bring it to you. View our virtual tour below to experience everything our campus has to offer from the comfort of your home.</p>
                    <a className="main-link" href="https://www.winthrop.edu/virtualtour/">Take the Tour</a>
                  </div>

                </section>
                <Apply />
            <Footer />
            </div>
         )
    }
}


function getRandomGrads(gradList) {
    // populate an array full of numbers and then shuffle it to get random grads.
    let sequentialArray = []
    for(let i=0; i<gradList.length; i++){
        sequentialArray.push(i)
    }
    console.log('array one', sequentialArray)
    shuffle(sequentialArray)
    console.log('array two', sequentialArray)

    let gradObject = []

    for(let a=0; a<3; a++){
        gradObject.push(gradList[sequentialArray[a]])
    }

    return gradObject

}

function shuffle(array){
    let currentIndex = array.length
    let tempVal, randIndex

    // while there remain elements to shuffle..
    while( 0 !== currentIndex) {
        // pick a remaining element...
        randIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // and swap it with the current element.
        tempVal = array[currentIndex]
        array[currentIndex] = array[randIndex]
        array[randIndex] = tempVal
    }

    return array
}

About.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query aboutPageQuery {

    allContentfulAboutPage {
      edges {
        node {
          bannerImage {
            description
            file {
              url
            }
          }
          whatIsDifd {
            whatIsDifd
          }
          tracksOverview {
            tracksOverview
          }
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
          whyAsset {
            file {
              url
            }
          }
        }
      }
    }

    allContentfulGraduate {
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

      allContentfulLearningOutcome {
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
