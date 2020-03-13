import React, {Component} from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"




class IM extends Component{
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
                <h1>Hello Welcome to interactive Media</h1>
                <p>We build software that powers the world wide web.</p>
                <p>My name is {this.state.name}</p>
                <Link to="/page-2/">Go to page 2</Link><br />
                <Link to="/massmedia/">Go to Mass Media</Link><br />
                <Link to="/">Back Home</Link>
            </Layout>
        )
    }
}

export default IM

