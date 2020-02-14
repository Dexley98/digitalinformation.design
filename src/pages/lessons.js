import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Lesson = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${node.id}/`}
    >
      <div>
        <div>{node.title}</div>
      </div>
    </Link>
  </div>
)

class LessonPage extends React.Component {
  render() {
    const lessonEdges = this.props.data.allContentfulLesson.edges
    return (
      <Layout>
        <div>
          <h3>Lessons</h3>
          {lessonEdges.map(({ node }, i) => (
            <Lesson node={node} key={node.id} />
          ))}
        </div>
      </Layout>
    )
  }
}

LessonPage.propTypes = propTypes

export default LessonPage

export const pageQuery = graphql`
  query {
    allContentfulLesson{
      edges {
        node {
          title
        }
      }
    }
  }
`

