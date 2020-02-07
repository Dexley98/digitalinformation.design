import React, {Component} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class MassMedia extends Component{
    constructor(){
        super()
        this.state = {
            name: "Izzy"
        }
    }

    render(){
        return(
            <Layout>
                <SEO title="Mass Media" />
                <h1>Welcome to Digital Mass Media</h1>
                <h2>We create the content that makes up the world wide web.</h2>
                <p>My name is {this.state.name}</p>
                <Link to="/webapps/">Go to Web Apps</Link>
                <Link to="/page-2/">Go to Page 2 (for some reason)</Link>
                <Link to="/">Home</Link>
            </Layout>
        )
    }
}

export default MassMedia