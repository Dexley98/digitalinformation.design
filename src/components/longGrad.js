import React, { Component } from 'react'

/**
 * This Component is similar to the other grad component. 
 * It just fills in more information from contentful. 
 * Such as Where are they now, and how the program prepared them for life and jobs.
 */

export default class LongGrad extends Component {
    render() {

        const uniqueId = this.makeUniqueGradId(this.props.gradName, this.props.jobTitle)
        return (
            <div id={uniqueId} className="ourPeople-grad-blob">
                <div className="grad-blob-picture">
                    <img src={this.props.gradPicture.file.url} alt={`${this.props.gradName}, a Winthrop Graduate`} />
                </div>
                <div className="grad-info-block">
                  <div className="grad-blob-overview">
                      <h3>{this.props.gradName}</h3>
                      <p>{this.props.gradDate.gradDate}</p>
                  </div>
                  <div className="grad-blob-where-are-they-now">
                      <h4>Where are they now?</h4>
                      <p>{this.props.whereAreTheyNow.whereAreTheyNow}</p>
                  </div>
                  <div className="grad-blob-difd-prep">
                      <h4>How did DIFD prepare you?</h4>
                      <p>{this.props.DifdPrep.DifdPrep}</p>
                  </div>
                </div>
            </div>
        )
    }

/**
 * Function makeUniqueGradId
 * @param {string} gradName 
 * @param {string} gradJobTitle 
 * This function takes in the grad's name and job title from contentful.
 * It then creates an Id that can be redirected to upon a link click. 
 * 
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
