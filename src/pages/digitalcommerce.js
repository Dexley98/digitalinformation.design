import React, {Component} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class DigitalCommerce extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Dom Exley'
        }
    }

    render() {
        return(
            <Layout>
                <SEO title="Web Apps" />
                <h1>Hello Welcome to Web Apps</h1>
                <p>We build software that powers the world wide web.</p>
                <p>My name is {this.state.name}</p>
                <Link to="/page-2/">Go to page 2</Link><br />
                <Link to="/massmedia/">Go to Mass Media</Link><br />
                <Link to="/">Back Home</Link>
            </Layout>
        )
    }
}

export default DigitalCommerce