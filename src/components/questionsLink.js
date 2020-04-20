import React, { Component } from 'react'
import {Link} from 'gatsby'

/**
 * This component is just a blurb that links to the questions form.
 */

export default class QuestionsLink extends Component {
    render() {
        return (
            <Link
                to="/questions/"
                state={{prevPath: typeof window !== 'undefined' ?  window.location.pathname  :  ' '}}>
                <div className="questions-bubble">
                    <p>Any Questions?</p>
                </div>
            </Link>
        )
    }
}
