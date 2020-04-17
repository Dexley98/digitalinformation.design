import React, { Component } from 'react'

export default class CourseBlock extends Component {
// initial render should recieve the DIFD core as state value.
    constructor(props){
        super(props)
        this.state = {
            coreArray: getCoreArray(this.props.courseList, 'difd'),
        }

// bind handle click functions to this component so it has access to props and state.
        this.handleCoreClick = this.handleCoreClick.bind(this)
        this.handleElectiveClick = this.handleElectiveClick.bind(this)
    }

// whenever buttons are clicked set the coreArray to appropriate value
    handleCoreClick = (e) => {
        this.setState({
            coreArray: getCoreArray(this.props.courseList, e.target.name)
        })
    }

    handleElectiveClick = (e) => {
        this.setState({
            coreArray: []
        })
    }


    render() {
        return (
            <div className="course-list-container">
                <button
                    id="difd-core-button"
                    className="course-button"
                    name="difd"
                    autoFocus={true}
                    onClick={this.handleCoreClick}>
                        DIFD Core
                </button>
                <button
                    id={`${this.props.slug}-core-button`}
                    className="course-button" name={this.props.slug}
                    onClick={this.handleCoreClick} >
                        {getTrackName(this.props.slug)}
                </button>
                <button
                    id="electives-button"
                    className="course-button"
                    name="electives"
                    onClick={this.handleElectiveClick} >
                        Electives
                </button>
{/*give functional componet CoreCourseList the coreArray for rendering */}
                <div className="core-course-list">
                    <CoreCourseList array={this.state.coreArray}/>
                    {/*<div className="course-legend">
                        <div id="elective-color-key"></div>
                        <p id="elective-color-key-message">Electives within the Core (color goes in the div above )</p>
                        <div id="required-color-key"></div>
                        <p id="required-color-key-message">Required within the Core (color goes in the div above)</p>
                    </div>*/}
                </div>

            </div>
        )

// this function is for cosemetics. Takes in the slug and outputs a better formatted version of Track Name.
        function getTrackName(slug){
            switch(slug){
                case 'interactivemedia':
                    return "IM Courses"
                case 'webapps':
                    return "WA Courses"
                case 'commerce':
                    return "DC Courses"
                case 'massmedia':
                    return "DMM Courses"
                default:
                    return "Not a track!"
            }
        }

    }

}

/*
This Functional Component does the work to render all the classes from Contentful.
returns the return of the array.map of the passed in array from state.
the inner returns return three p elements wrapped in a div.
The inner elements are are attained from the values within the array.
if the coreElective field of the passed in array is true, add an aditional class for styling.
*/

const CoreCourseList = ({array}) => {
    if(array.length == 0){
        return(
            <div className="outside-electives-blob">
                <p>For an approved list of general electives
                    <a href="https://www.winthrop.edu/uploadedFiles/recandreg/CourseSchedule/General-Ed-program.pdf"> Click Here</a></p>
            </div>
        )
    }
    return array.map((index) => {
        if(index.coreElective){
            return(
                <div className="course-blob elective">
                    <p className="elective-designator">{trimDesignator(index.designator)}</p>
                    <p className="elective-name">{index.name}</p>
                    <p className="elective-hours">{index.hours}</p>
                </div>
            )
        }else{
            return(
                <div className="course-blob">
                    <p className="designator">{trimDesignator(index.designator)}</p>
                    <p className="name">{index.name}</p>
                    <p className="hours">{index.hours}</p>
                </div>
            )
        }
    })

}

/*
All Course Array is the entire array of courses from contentful passed into the constructor as a prop
coreName represents the name of the track or 'core'.
Fucntion filters the entire course array based on coreName and returns an array of courses relevant to a specified track.
*/
function getCoreArray(allCourseArray, coreName){
    let coreArray = []
    allCourseArray.map((index) => {
        if(index.coreCompetency.includes(coreName)){
            coreArray.push(index)
        }
    })
    return coreArray
}

/*
Designators should only have two distinct strings after split.
if they have three, in the event of special cases in content model split along space
pop the last index and go through entire array adding the indexs to updatedDesignator.
if there are only 2 indexs just return the passed in designator.
*/
function trimDesignator(designator){
    let designatorArray = designator.split(" ")
    if(designatorArray.length == 3){
        let updatedDesignator = ""
        designatorArray.pop()
        designatorArray.forEach(index => {
            updatedDesignator += index + " "
        });
        return updatedDesignator
    }
    return designator


}
