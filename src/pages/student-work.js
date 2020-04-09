// bring in packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// bring in component files. 
import Menu from '../components/main-menu'
import Footer from '../components/footer'
import Apply from '../components/apply'

export default class StudentWork extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h1>Welcome to Student Work Page.</h1>
                <Apply />
                <Footer />
            </div>
        )
    }
}

StudentWork.propTypes = {
    data: PropTypes.object.isRequired
}

/* export const pageQuery = graphql`



` */