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
                <Link to={`${this.props.slug}/#top`}
                      state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
                      className="main-link">
                          Learn More
                </Link>
            </div>
        )
    }
}
