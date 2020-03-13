import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Job from "../components/Job"



export default () => {
    const data = useStaticQuery(
        graphql`
            query{
                allContentfulJob(filter: {concentration: {eq: "Web Apps"}}) {
                    nodes {
                        concentration
                        title
                        description {
                            description
                        }
                    }
                }
            }
        `
    )
    const nodes = data.data.allContentfulJob.nodes;
    return(
        <div>
            
        </div>
    )
}