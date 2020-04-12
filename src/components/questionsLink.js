import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class QuestionsLink extends Component {
    render() {
        return (
            <Link 
                to="/questions/"
                state={{prevPath: window.location.pathname}}>
                <div className="questions-bubble">
                    Any Questions?
                </div>
            </Link>
        )
    }
}
