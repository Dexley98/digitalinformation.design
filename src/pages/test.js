import React, { Fragment } from "react"
import {graphql} from "gatsby"

import Professor from "../components/Professor"

const Test = ({data}) => {
    let professor = data.allContentfulProfessor.nodes
    return( 
        professor.map((node) =>{
            console.log('from inside return in test.js', node)
            return <Professor node={node} key={node.id}/>
        })
    )
}

export const query = graphql`
    query{
        allContentfulProfessor(filter: {concentration: {eq: "Web Apps"}}) {
            nodes {
                concentration
                name
                id
            }
        }
    }`


export default Test
