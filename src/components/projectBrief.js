import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class ProjectBrief extends Component {
    render() {
        console.log(this.props.projectMedia[0])
        return (
            <Link to="/student-work/">
            {/* going to need to programtically direct to individual student project */}
                <div className="projectBrief-blob">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.shortDesc}</p>
                    <DisplayMedia mediaInfo= {this.props.projectMedia[0]} />
                    {/* Link to the project here or needs to wrap arond entire div. */}
                </div>
            </Link>
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
