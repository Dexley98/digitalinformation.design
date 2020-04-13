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
                    <h1 className="ourPeople-header">OUR PEOPLE</h1>
                    <p className="ourPeople-header">{ourPeopleOverview.ourPeopleOverview}</p>
                </section>
                <section className="ourPeople-professors-block">
                  <div className="top-curve"></div>
                  <div className="middle-bg">
                    <div className="professors-title">
                      <h2>MEET THE PROFESSORS</h2>
                      <p>{professorsOverview.professorsOverview}</p>
                    </div>
                    <div className="prof-blob-container">
                    {profList.map( (index) => {
                        return(
                            <Professor
                                profPicture={index.node.profPicture}
                                profName={index.node.profName}
                                bio={index.node.bio}
                            />
                        )
                    })}
                    </div>
                    </div>
                    <div className="bottom-curve"></div>
                </section>
<<<<<<< HEAD
                <section className="ourPeople-graduates-block">
                  <div className="graduates-title">
=======
                <section id="graduates" className="ourPeople-graduates-block">
>>>>>>> c7424dfd7d8015a0aef839e47ee03f49d6b000c5
                    <h2>MEET THE GRADUATES</h2>
                    <p>{graduatesOverview.graduatesOverview}</p>
                  </div>
                    {gradList.map( (index) =>{
                        return(
<<<<<<< HEAD
                            <LongGrad
                                gradPicture={index.node.gradPicture}
                                gradName={index.node.gradName}
                                gradDate={index.node.gradDate}
                                whereAreTheyNow={index.node.whereAreTheyNow}
                                DifdPrep={index.node.DifdPrep}
=======
                            <LongGrad
                                jobTitle={index.node.jobTitle}
                                gradPicture={index.node.gradPicture}
                                gradName={index.node.gradName}
                                gradDate={index.node.gradDate}
                                whereAreTheyNow={index.node.whereAreTheyNow}
                                DifdPrep={index.node.DifdPrep}
>>>>>>> c7424dfd7d8015a0aef839e47ee03f49d6b000c5
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
                jobTitle
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
