import React, { Component } from 'react'

export default class job extends Component {
    render() {
        return (
            <div className="job-blob">
                <h4>{this.props.jobTitle}</h4>
                <p>{this.props.jobDesc}</p>
            </div>
        )
    }
}
