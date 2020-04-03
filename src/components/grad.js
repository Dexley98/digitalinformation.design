import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Grad extends Component {
    render() {
        return (
            <div className="grad-blob">
                <img src={this.props.imgSrc} alt={`${this.props.gradName}, a Winthrop Graduate`} />
                <h4>{this.props.gradName}</h4>
                <h5>{this.props.jobTitle}</h5>
                <p>{this.props.gradBio}</p>
                <p><Link to="#gradutes">Learn More</Link></p>
            </div>
        )
    }
}
