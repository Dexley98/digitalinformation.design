import React from "react"
import { useStaticQuery, graphql } from "gatsby"


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
    console.log(data);
    return(
        <div>
            <p>Hello</p>
        </div>
    )
}