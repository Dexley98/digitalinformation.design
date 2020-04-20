import React, { Component } from 'react'
import { Link } from 'gatsby'

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
