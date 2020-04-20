import React, { Component } from 'react'
import { Link } from 'gatsby'

/**
 * This Class returns a graduate. 
 * First it creates a unique grad id.
 * Then it populates a component with the basics of a grads info from contentful. 
 */

export default class Grad extends Component {

    render() {
        const uniqueId = this.makeUniqueGradId(this.props.gradName, this.props.jobTitle)
        return (
            <div className="grad-blob">
                <img src={this.props.imgSrc} alt={`${this.props.gradName}, a Winthrop Graduate`} />
                <h4>{this.props.gradName}</h4>
                <h5>{this.props.jobTitle}</h5>
                <p>{this.props.gradBio}</p>
                <p><Link to={`/our-people#${uniqueId}`} 
                         state={{ prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}
                         className="main-link">
                             Learn More
                    </Link>
                </p>
            </div>
        )
    }

/**
 * function makeUniqueGradID 
 * @param {string} gradName 
 * @param {string} gradJobTitle
 * 
 * This function takes in the grad's name and job title from contentful.
 * It then creates an Id that can be redirected to upon a link click.  
 */

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
