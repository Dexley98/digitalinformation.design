import React, { Component } from 'react'

export default class ProjectBrief extends Component {
    render() {
        console.log(this.props.projectMedia[0])
        return (
            <div className="projectBrief-blob">
                <DisplayMedia mediaInfo= {this.props.projectMedia[0]} />
                <div className="overlay">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.shortDesc}</p>
                </div>
            </div>
        )
    }
}

const DisplayMedia = ({mediaInfo}) => {
    console.log(mediaInfo.file)
    let contentTypeSplit = mediaInfo.file.contentType.split("/");
    console.log(contentTypeSplit)
    console.log(mediaInfo.file.contentType)
    if(contentTypeSplit[0] == "video"){
        return(
                <video controls>
                    <source src={mediaInfo.file.url} type={`"${mediaInfo.file.contentType}"`} />
                    Your browser does not support the video tag.
                </video>
        )
    }
    if(contentTypeSplit[0] == "image"){
        return(
            <img src={mediaInfo.file.url} />
        )
    }
}
