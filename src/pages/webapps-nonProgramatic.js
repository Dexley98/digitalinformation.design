import React, {Component} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"





class WebApps extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Dom'
        }
    }

    render() {
        console.log(this.props.data.allContentfulConcentrationPageHome.nodes)
        return(
            <Layout>
                <SEO title="Web Apps" />
                <h1>Hello Welcome to Web Apps</h1>
                <p>We build software that powers the world wide web.</p>
                <p>My name is {this.state.name}</p>
            </Layout>
        )
    }
}

export default WebApps
 /*
export const query = graphql`
    query{
        allContentfulConcentrationPageHome(filter: {concentration: {eq: "Web Applications"}}) {
        nodes {
            concentration
            splashMedia {
            description
            file {
                url
            }
            }
            tagline
            taglineList
            concentrationSummary
            WhatDoesItMean {
            id
            WhatDoesItMean
            }
            concentrationAsset {
            description
            file {
                url
            }
            }
            concentrationLogo {
            description
            file {
                url
            }
            }
            learningOutcomesSummary {
            id
            learningOutcomesSummary
            }
            learningOutcomeAsset {
            id
            file {
                url
            }
            }
        }
        }
    }` */