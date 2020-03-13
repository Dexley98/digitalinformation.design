import React from "react"
//import {Link, graphql} from "gatsby" 




function Job (node) {
    return(
        <div className="job">
            <p>{node.concentration}</p>
            <p>{node.title}</p>
            <p>{node.description.description}</p>
        </div>
    )
    
}

export default Job