import React, { Component } from 'react'

export default class Grad extends Component {
    render() {
        return (
            <div className="grad-blob">
                <img src={this.props.imgSrc} alt={`${this.props.gradName}, a Winthrop Graduate`} />
                <h4>{this.props.gradName}</h4>
                <h5>{this.props.jobTitle}</h5>
                <p>{this.props.gradBio}</p>
                <a href="#graduates">Learn More</a>
            </div>
        )
    }
}
