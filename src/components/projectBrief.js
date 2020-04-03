import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class ProjectBrief extends Component {
    render() {
        return (
            <div className="projectBrief-blob">
                <h4>{this.props.Title}</h4>
                <p>{this.props.shortDesc}</p>
            </div>
        )
    }
}