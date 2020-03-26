import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from "../components/layout"

export default class parentPage extends Component {
    render() {
        const {
            slug
         } = this.props.data.contentfulConcentrationPageParents;

        return (
            <Layout>
                <div>
                    <h1>Welcome to the {slug} page!</h1>
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
        slug
    }
}`