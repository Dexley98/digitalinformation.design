import React, { Component } from 'react'
import { Link } from 'gatsby'

/**
 * This component is a watered down version of the bigger one in project.js
 * It just creates a brief of a project, on a given concentration page. 
 * The images are link to the student-work page. 
 * The history is used to create views on the student-work page.
 * Also only displays the first image of the project.
 */

export default class ProjectBrief extends Component {
    render() {
        
        return (
            <div className="projectBrief-blob">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.shortDesc}</p>
                    <Link to="student-work/#projects"
                          state={{ prevPath: typeof window !== 'undefined' ? window.location.pathname : ''}}>
                        <DisplayMedia mediaInfo= {this.props.projectMedia[0]} />
                    </Link>
            </div>
        )
    }
}

const DisplayMedia = ({mediaInfo}) => {
    return(
        <div className="projectBrief-blob-media">
            <img src={mediaInfo.file.url} alt={mediaInfo.description}/>
        </div>
    )
}
