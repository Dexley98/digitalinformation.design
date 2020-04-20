import React, { Component } from 'react'

export default class Outcome extends Component {
    render() {
        return (
            <div className="learningOutcome-blob">
                <div className="learningOutcome-icon-wrapper">
                    <img src={this.props.iconSrc} alt={this.props.description} height="200" width="200"/>
                </div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
