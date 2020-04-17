import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql} from 'gatsby'

import Menu from '../components/main-menu'
import Footer from '../components/footer'

export default class QuestionSubmitted extends Component {
    render() {
        let randomImageIndex = Math.floor(Math.random() * Math.floor(4));
        const randomImage = this.props.data.allContentfulConcentrationPageHome.edges[randomImageIndex].node.concentrationAsset
        console.log(randomImage)

        return (
            <div class="main-container">
            <Menu />
                <section className="random-image-block">
                    <img src={randomImage.file.url} alt={randomImage.description} />
                </section>
                <section className="question-received-block">
                    <h1>THANK YOU!</h1>
                    <p>Someone on our team will get back to you ASAP!</p>
                    <Link to="/"
                          state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
                          className="main-link">
                              Home
                    </Link>
                </section>
            <Footer />
            </div>
        )
    }
}

QuestionSubmitted.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql `
    query sumbissionPageQuery{

        allContentfulConcentrationPageHome {
            edges {
              node {
                concentrationAsset {
                  description
                  file {
                    url
                  }
                }
              }
            }
        }
    }
`
