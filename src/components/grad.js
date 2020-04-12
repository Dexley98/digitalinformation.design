import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Grad extends Component {

    render() {
        console.log(this.props)
        const uniqueId = this.makeUniqueGradId(this.props.gradName, this.props.jobTitle)
        console.log(uniqueId)
        return (
            <div className="grad-blob">
                <img src={this.props.imgSrc} alt={`${this.props.gradName}, a Winthrop Graduate`} />
                <h4>{this.props.gradName}</h4>
                <h5>{this.props.jobTitle}</h5>
                <p>{this.props.gradBio}</p>
                <p><Link to={`/our-people#${uniqueId}`} 
                         state={{ prevPath: window.location.pathname}}
                         className="main-link">
                             Learn More
                    </Link>
                </p>
            </div>
        )
    }

    makeUniqueGradId(gradName, gradJobTitle){
        let gradNameSplitList = gradName.split(" ")
        let gradJobTitleSplitList = gradJobTitle.split(" ")

        let uniqueIdString = ""

        gradNameSplitList.map((index) =>{
            uniqueIdString += index + "-"
        })

        for(let i=0; i<gradJobTitleSplitList.length; i++){
            if(i<gradJobTitleSplitList.length-1){
                uniqueIdString += gradJobTitleSplitList[i] + "-"
            }else{
                uniqueIdString += gradJobTitleSplitList[i]
            }
        }

        return uniqueIdString
    }

}
