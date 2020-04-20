import React, { Component } from 'react'

/**
 * Another Simple Component. 
 * This one just outputs all of the learning outcome info from contentful.
 */

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
