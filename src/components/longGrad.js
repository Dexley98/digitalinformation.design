import React, { Component } from 'react'

export default class LongGrad extends Component {
    render() {

        const uniqueId = this.makeUniqueGradId(this.props.gradName, this.props.jobTitle)
        console.log(uniqueId)
        return (
            <div id={uniqueId} className="ourPeople-grad-blob">
                <div className="grad-blob-picture">
                    <img src={this.props.gradPicture.file.url} alt={`${this.props.gradName}, a Winthrop Graduate`} />
                </div>
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