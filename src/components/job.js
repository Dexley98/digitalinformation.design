import React, { Component } from 'react'

/*
This component is super simple. 
It just creates a blob with a job title and description.
*/

export default class Job extends Component {
    render() {
        return (
            <div className="job-blob">
                <h4>{this.props.jobTitle}</h4>
                <p>{this.props.jobDesc}</p>
            </div>
        )
    }
}
