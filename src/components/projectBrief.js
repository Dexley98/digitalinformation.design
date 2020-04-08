import React, { Component } from 'react'

export default class ProjectBrief extends Component {
    render() {
        console.log(this.props.projectMedia[0])
        return (
            <div className="projectBrief-blob">
                <h3>{this.props.title}</h3>
                <p>{this.props.shortDesc}</p>
                <DisplayMedia mediaInfo= {this.props.projectMedia[0]} />
                {/* Link to the project here or needs to wrap arond entire div. */}
            </div>
        )
    }
}

const DisplayMedia = ({mediaInfo}) => {
    return(
        <img src={mediaInfo.file.url} alt={mediaInfo.description}/>
    )
}
