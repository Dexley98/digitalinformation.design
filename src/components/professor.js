import React, { Component } from 'react'

export default class Professor extends Component {
    render() {
        return (
            <div className="prof-blob">
                <img src={this.props.profPicture.file.url} alt={this.props.profPicture.description}/>
                <h3>{this.props.profName}</h3>
                <p>{this.props.bio.bio}</p>
            </div>
        )
    }
}
