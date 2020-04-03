import React, { Component } from 'react'

export default class Apply extends Component {
    render() {
        return (
            <section className="apply-now-block">
                <h2>APPLY NOW</h2>
                <p>Interested? Put your future on the right track today!</p>
                {/*External links must still use the a tag accoding to gatsby link docs. */}
                <a href="https://apply.winthrop.edu/apply/">Apply Now!</a>
            </section>
        )
    }
}
