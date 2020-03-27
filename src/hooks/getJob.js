import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Job from "../components/Job"



export default () => {
    const data = useStaticQuery(
        graphql`
            query{
                allContentfulJob{
                    nodes {
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