import React, { Component } from 'react'

export default class ProjectsBlock extends Component {
// initial render should recieve the DIFD core as state value.
    constructor(props){
        super(props)
        let concentration = props.previousPageSlug === undefined ? "commerce" : props.previousPageSlug
        this.state = {
            concentrationProjects: getConcentrationProjects(props.allProjectArray, concentration),
            active: concentration
        }

// bind handle click functions to this component so it has access to props and state.
        this.handleConcentrationClick = this.handleConcentrationClick.bind(this)
    }

// whenever buttons are clicked set the coreArray to appropriate value
    handleConcentrationClick = (e) => {
        this.setState({
            concentrationProjects: getConcentrationProjects(this.props.allProjectArray, e.target.name)
        })
    }


    render() {
//debugging
        //console.log('state inside render ', this.state.coreArray)
        return (
            <div className="course-list-container">
                <button
                    id="commerce-projects-button"
                    className={`projects-button ${this.state.active === 'commerce' ? 'active' : ''}`}
                    name="commerce"
                    onClick={this.handleConcentrationClick}>
                        Digital Commerce
                </button>
                <button
                    id="massmedia-projects-button"
                    className={`projects-button ${this.state.active === 'massmedia' ? 'active' : ''}`}
                    name="massmedia"
                    onClick={this.handleConcentrationClick}>
                        Digital Mass Media
                </button>
                <button
                    id="interactivemedia-projects-button"
                    className={`projects-button ${this.state.active === 'interactivemedia' ? 'active' : ''}`}
                    name="interactivemedia"
                    onClick={this.handleConcentrationClick}>
                        Interactive Media
                </button>
                <button
                    id="webapps-projects-button"
                    className={`projects-button ${this.state.active === 'webapps' ? 'active' : ''}`} 
                    name="webapps"
                    onClick={this.handleConcentrationClick}>
                        Web Applications
                </button>

{/*give functional componet CoreCourseList the coreArray for rendering */}
                <div className="projects-list">
                    <ConcentrationProjectList array={this.state.concentrationProjects}/>
                </div>

            </div>
        )

    }

}

/*
This Functional Component does the work to render all the projects for a given concentration from Contentful.
returns the return of the array.map of the passed in array from state.
the inner return returns however many images there are for a project, an h3 of the title, and a p of description.
*/

const ConcentrationProjectList = ({array}) => {
    if(array.length === 0){
        return(
            <div className="project-blob">
                <p>There's no projects here yet. Maybe you could have a project featured here!</p>
            </div>
        )
    }
    return array.map((index) => {
            return(
                <div className="project-blob">
                    {index.projectMedia.map( (image) =>{
                        console.log('index in project blob for each ', index)
                        return(
                            <img className="project-image" src={image.file.url} alt={image.description} />
                        )
                    })}
                    <h3 className="project-title">{index.title}</h3>
                    <p className="project-description">{index.description.description}</p>
                </div>
            )
    })

}

/*
All Course Array is the entire array of courses from contentful passed into the constructor as a prop
coreName represents the name of the track or 'core'.
Fucntion filters the entire course array based on coreName and returns an array of courses relevant to a specified track.
*/
function getConcentrationProjects(allProjectArray, concentrationName){
    let projectArray = []
    console.log('all project array ', allProjectArray)
    allProjectArray.map((index) => {
        if(index.concentrationTag.includes(concentrationName)){
            projectArray.push(index)
        }
    })
    return projectArray
}
