import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// Pull in Components
import Menu from '../components/main-menu'
import Footer from '../components/footer'
import Job from '../components/job'
import Grad from '../components/grad'
import Apply from '../components/apply'
import ProjectBrief from '../components/projectBrief'

export default class parentPage extends Component {
    render() {
// Major Content for Page
        const {
            concentrationTitle,
            mainActivity,
            splashMedia,
            concentrationSummary,
            employmentOutlook,
            jobOpportunities,
            concentrationAsset,
            medianSalary
         } = this.props.data.contentfulConcentrationPageParents

// trim the concentration title to get rid of parents suffix
         const trimedConcentrationTitle = trimConcentrationName(concentrationTitle)

// Jobs, grads, and projects to pull into indiviudal components
         const jobList = this.props.data.allContentfulJob.edges
         const gradList = this.props.data.allContentfulGraduate.edges
         const allTrackProjects = this.props.data.allContentfulProject.edges


        return (
            <div>
                <Menu />

{/* Splash Media Section */}
                <section className="splashMedia-block">
                    <img className="hero-image" src={splashMedia[0].file.url} alt={splashMedia[0].description} />
                    <div className="parent-splash">
                      <h1 className="parent-splash">{trimedConcentrationTitle}</h1>
                      <h2 className="parent-splash">{mainActivity}</h2>
                    </div>
                </section>

{/* What Does it Mean Parent Section */}
                <section className="whatDoesItMean-block-parents">
                    <h2>What is {trimedConcentrationTitle}?</h2>
                    <p>{concentrationSummary.concentrationSummary}</p>
                </section>

{/* Employment Outlook Section */}
                <section className="employment-outlook-block">
                    <p>{employmentOutlook.employmentOutlook}</p>
                </section>

{/* Job Oppurtunities Section */}
                <section className="job-oppurtunities-block">
                  <div className="job-opportunities-header">
                    <h2>Job Opportunities</h2>
                    <p>{jobOpportunities.jobOpportunities}</p>
                  </div>
                    <img className="job-opportunities-header" src={concentrationAsset.file.url} alt={concentrationAsset.description} />
                    <div>
                      <div className="job-blob-container spacing">
                        {jobList.map((index) =>{
                          return(<Job jobTitle={index.node.title} jobDesc={index.node.description.description}/>)
                        })}
                      </div>
                      <p className="spacing">Do you want to learn more about the careers that our program can prepare you for?</p>
                      <p><a href="" className="main-link">Learn More</a></p>
                    </div>

                </section>
                <div className="bottom-curve"></div>
                <section className="median-salary-block">
                    <p>{medianSalary.medianSalary}</p>
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
                            imgSrc={index.node.picture.file.url}
                            gradName={index.node.name}
                            jobTitle={index.node.jobTitle}
                            gradBio={index.node.bio.bio}
                          />)
                        })}
                      </div>
                    </div>
                    <div className="bottom-curve"></div>
                  </section>
              }

{/* Student Work Section*/}
                {allTrackProjects.length > 0 &&
                  <section className="student-work-block">
                    <h2>STUDENT WORK</h2>
                    <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                    {allTrackProjects.map((index) =>{
                      return(
                        <ProjectBrief title={index.node.title} shortDesc={index.node.shortDescription} projectMedia={index.node.projectMedia}/>
                        )
                    })}
                  </section>
                }
                <Apply />
                <Footer />
            </div>
        )
/* END OF RETURN */

        function trimConcentrationName(concentrationName){
          let trimedNameArray = concentrationName.split(" ")
          let trimedName = ""

          for(let i = 0; i<trimedNameArray.length; i++){
            if( i == (trimedNameArray.length - 1) ){
              // this is the last item in the trimed array. Should be 'Parents'. We won't add this to trimed name.
            }

            else if( i < (trimedNameArray.length - 2) ){
              // this is everything except for the second to last index. We want to add a space inbetween the words.
              trimedName += trimedNameArray[i] + " "
            }

            else {
              // this is the second to last index. We don't want to add a space.
              trimedName += trimedNameArray[i]
            }
          }

          return trimedName

        }
  }
/* END OF RENDER */

}
/* END OF PARENT TEMPLATE CLASS */

parentPage.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query parentPageQuery($slug: String!){

    contentfulConcentrationPageParents(slug: {eq: $slug}) {
        id
        slug
        concentrationTitle
        mainActivity
        splashMedia {
            description
            file {
                url
            }
        }
        concentrationSummary {
            concentrationSummary
        }
        employmentOutlook {
            employmentOutlook
        }
        jobOpportunities {
            jobOpportunities
        }
        concentrationAsset {
            description
            file {
                url
            }
        }
        medianSalary {
            medianSalary
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
}`
