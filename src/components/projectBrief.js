import React, { Component } from 'react'

export default class ProjectBrief extends Component {
    render() {
        return (
            <div className="projectBrief-blob">
                <h3>{this.props.title}</h3>
                <p>{this.props.shortDesc}</p>
                <iframe src={this.props.fileUrl}></iframe>
            </div>
        )
    }
}