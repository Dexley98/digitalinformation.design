import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

// bring in component files
import Menu from '../components/main-menu'
import Footer from '../components/footer'
import Apply from '../components/apply'
import Professor from '../components/professor'
import LongGrad from '../components/longGrad'

export default class OurPeople extends Component {
    render() {
        const {
            bannerImage,
            ourPeopleOverview,
            professorsOverview,
            graduatesOverview
        } = this.props.data.allContentfulOurPeoplePage.nodes[0]

        const profList = this.props.data.allContentfulProfessor.edges
        const gradList = this.props.data.allContentfulGraduate.edges
        console.log(gradList)

        return (
            <div>
            <Menu />
                <section className="ourPeople-bannerImg-block">
                    <img src={bannerImage.file.url} alt={bannerImage.description} />
                </section>
                <section className="ourPeople-overview-block">
                    <h1>OUR PEOPLE</h1>
                    <p>{ourPeopleOverview.ourPeopleOverview}</p>
                </section>
                <section className="ourPeople-professors-block">
                    <h2>MEET THE PROFESSORS</h2>
                    <p>{professorsOverview.professorsOverview}</p>
                    {profList.map( (index) => {
                        return(
                            <Professor 
                                profPicture={index.node.profPicture} 
                                profName={index.node.profName} 
                                bio={index.node.bio} 
                            />
                        )
                    })}
                </section>
                <section className="ourPeople-graduates-block">
                    <h2>MEET THE GRADUATES</h2>
                    <p>{graduatesOverview.graduatesOverview}</p>
                    {gradList.map( (index) =>{
                        return(
                            <LongGrad 
                                gradPicture={index.node.gradPicture} 
                                gradName={index.node.gradName} 
                                gradDate={index.node.gradDate} 
                                whereAreTheyNow={index.node.whereAreTheyNow} 
                                DifdPrep={index.node.DifdPrep} 
                            />
                        )
                    })}
                </section>
                <Apply />
            <Footer />
            </div>
        )
    }
}

OurPeople.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
    query ourPeoplePageQuery {

        allContentfulOurPeoplePage {
            nodes {
                bannerImage {
                    description
                    file {
                        url
                    }
                }
                ourPeopleOverview{
                    ourPeopleOverview
                }
                professorsOverview {
                    professorsOverview
                }
                graduatesOverview {
                    graduatesOverview
                }
            }
        }

        allContentfulProfessor {
            edges {
                node {
                    profPicture {
                        description
                        file {
                            url
                        }
                    }
                    profName
                    bio {
                        bio
                    }
                }
            }
        }

        allContentfulGraduate {
            edges {
              node {
                gradPicture {
                  description
                  file {
                    url
                  }
                }
                gradName
                gradDate {
                  gradDate
                }
                whereAreTheyNow {
                  whereAreTheyNow
                }
                DifdPrep {
                  DifdPrep
                }
              }
            }
        }

    }
`