import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Menu from '../components/main-menu'
import Footer from '../components/footer'

import Job from '../components/job'
import Grad from '../components/grad'
import Apply from '../components/apply'

export default class parentPage extends Component {
    render() {
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

         const jobList = this.props.data.allContentfulJob.edges
         const gradList = this.props.data.allContentfulGraduate.edges

        return (
            <div>
                <Menu />
                <section className="splashMedia-block">
                    <img className="hero-image" src={splashMedia[0].file.url} alt={splashMedia[0].description} />
                    <div className="parent-splash">
                      <h1 className="parent-splash">{concentrationTitle}</h1>
                      <h2 className="parent-splash">{mainActivity}</h2>
                    </div>
                </section>
                <section className="whatDoesItMean-block-parents">
                    <h2>What is {concentrationTitle}</h2>
                    <p>{concentrationSummary.concentrationSummary}</p>
                </section>
                <section className="employment-outlook-block">
                    <p>{employmentOutlook.employmentOutlook}</p>
                </section>
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
                <section className="graduate-block">
                    <h2>HEAR FROM OUR GRADUATES</h2>
                    <p>See where past members of our program are today.</p>
                    <div className="grad-blob-container">
                      {gradList.map((index) =>{
                        return(<Grad imgSrc={index.node.picture.file.url} gradName={index.node.name} jobTitle={index.node.jobTitle} gradBio={index.node.bio.bio} />)
                      })}
                    </div>
                </section>
                <section className="student-work-block">
                    <h3>STUDENT WORK</h3>
                    <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                    <p>STUDENT WORK COMPONENTS WILL GO HERE.</p>
                </section>
                <Apply />
                <Footer />
            </div>
        )
    }
}

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
}`
