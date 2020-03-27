import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from "../components/layout"

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
         } = this.props.data.contentfulConcentrationPageParents;

        return (
            <Layout>
                <div>
                <section className="splashMedia-block">
                    <img src={splashMedia[0].fixed.src} alt={splashMedia[0].description} />
                    <h1>{concentrationTitle}</h1>
                    <h2>{mainActivity}</h2>
                </section>
                <section className="summary-block">
                    <h3>What is {concentrationTitle}</h3>
                    <p>{concentrationSummary.concentrationSummary}</p>
                </section>
                <section className="employment-outlook-block">
                    <p>{employmentOutlook.employmentOutlook}</p>
                </section>
                <section className="job-oppurtunities-block">
                    <h3>Job Opportunities</h3>
                    <p>{jobOpportunities.jobOpportunities}</p>
                    <img src={concentrationAsset.fixed.src} alt={concentrationAsset.description} />
                </section>
                <section className="career-block">
                    <h2>CAREERS</h2>
                    <p>THIS IS GOING TO BE WHERE THE CAREER COMPONENTS GO.</p>
                    <p>Do you want to learn more about the careers that our program can prepare you for?</p>
                    <p>LINK WILL GO HERE.</p>
                </section>
                <section className="median-salary-block">
                    <p>{medianSalary.medianSalary}</p>
                </section>
                <section className="graduate-block">
                    <h2>HEAR FROM OUR GRADUATES</h2>
                    <p>LOREM IPSUM IS HERE CURRENTLY. DESCRIBE THE CAREERS YO.</p>
                    <p>THIS IS GOING TO BE WHERE THE GRADUATES COMPONENTS WILL GO.</p>
                </section>
                <section className="student-work-block">
                  <h3>STUDENT WORK</h3>
                  <p>Our students are always hard at work in their classes. Here are some finished projects that demonstrate what you can learn to do.</p>
                  <p>STUDENT WORK COMPONENTS WILL GO HERE.</p>
                </section>
                <section className="apply-now-block">
                  <h3>APPLY NOW</h3>
                  <p>Interested? Put your future on the right track today!</p>
                  <p>APPLY NOW LINK WILL GO HERE.</p>
                </section>
                </div>
            </Layout>
        )
    }
}

parentPage.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query concentrationPageParentsQuery($slug: String!){
    contentfulConcentrationPageParents(slug: {eq: $slug}) {
        id
        slug
        concentrationTitle
        mainActivity
        splashMedia {
            description
            fixed {
                src
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
            fixed {
                src
            }
        }
        medianSalary {
            medianSalary
        }
    }
}`