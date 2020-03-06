import React, {Component} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class WebApps extends Component{
    constructor(){
        super()
    }

    render() {
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