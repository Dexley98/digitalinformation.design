import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Track extends Component {
    render() {

        function getTrackName(slug){
            switch(slug){
                case '/interactivemedia':
                    return "INTERACTIVE MEDIA"
                case '/webapps':
                    return "WEB APPLICATIONS"
                case '/commerce':
                    return "DIGITAL COMMERCE"
                case '/massmedia':
                    return "DIGITAL MASS MEDIA"
                default:
                    return "Not a track!"
            }
        }

        return (
            <div className="track-blob">
                <h3>{getTrackName(this.props.slug)}</h3>
                <p>{this.props.overview}</p>
                <Link to={this.props.slug}
                      state={{ prevPath: window.location.pathname}}>
                          Learn More
                </Link>
            </div>
        )
    }
}
