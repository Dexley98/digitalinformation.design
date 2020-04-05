import React, { Component } from 'react'

export default class CourseBlock extends Component {
    constructor(props){
        super(props)
        this.state = {
            coreArray: getCoreArray(this.props.courseList, 'difd'),
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        this.setState({
            coreArray: getCoreArray(this.props.courseList, e.target.name)
        })
        console.log(this.state.coreArray)
    }


    render() {
        //console.log('from course.js ', this.props.courseList)
        //console.log('slug from course.js', this.props.slug)
        console.log('state inside render ', this.state.coreArray)
        return (
            <div>
                <button name="difd" onClick={this.handleClick}> DIFD Core </button>
                <button name={this.props.slug} onClick={this.handleClick} > {getTrackName(this.props.slug)} </button>
                <button name="electives" > Electives </button>
                <div className="core-course-list">
                    <CoreCourseList array={this.state.coreArray}/>
                </div>
                
            </div>
        )

        function getTrackName(slug){
            switch(slug){
                case 'interactivemedia':
                    return "IM Core"
                case 'webapps':
                    return "WEB APPS Core"
                case 'commerce':
                    return "COMMERCE Core"
                case 'massmedia':
                    return "MASS MEDIA Core"
                default:
                    return "Not a track!"
            }
        }

    }

}

const CoreCourseList = ({array}) => {
    return array.map((index) => {
        return(
            <>
                <p>{index.designator}</p>
                <p>{index.name}</p>
                <p>{index.hours}</p>
            </>
        )
    })

}

function getCoreArray(allCourseArray, coreName){
    let coreArray = []
    allCourseArray.map((index) => {
        if(index.coreCompetency == coreName){
            coreArray.push(index)
        }
    })
    return coreArray
}