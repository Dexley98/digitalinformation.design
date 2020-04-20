import React, { Component } from 'react'

// This is just a component that drives to applications on Winthrop's website.

export default class Apply extends Component {
    render() {
        return (
            <section className="apply-now-block">
              <div className="top-curve"></div>
              <div>
                <h2>APPLY NOW</h2>
                <p>Interested? Put your future on the right track today!</p>
                <a href="https://apply.winthrop.edu/apply/" className="main-link">Apply Now!</a>
              </div>
            </section>
        )
    }
}
