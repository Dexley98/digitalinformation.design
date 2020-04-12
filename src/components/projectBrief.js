import React, { Component } from 'react'
import { Link, navigate } from 'gatsby'

export default class ProjectBrief extends Component {
    render() {
        
        function handleNavigation(){
            console.log('div clicked!')
            navigate("/student-work/")
        }
        return (
            <div className="projectBrief-blob" onClick={handleNavigation}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.shortDesc}</p>
                    <DisplayMedia mediaInfo= {this.props.projectMedia[0]} />
                    {/* Link to the project here or needs to wrap arond entire div. */}
            </div>
        )
    }
}

const DisplayMedia = ({mediaInfo}) => {
    return(
        <div className="projectBrief-blob-media">
            <img src={mediaInfo.file.url} alt={mediaInfo.description}/>
        </div>
    )
}
