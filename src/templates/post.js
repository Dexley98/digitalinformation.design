import React, {Component} from "react"
import PropTypes from "prop-types"
import { graphql } from "graphql-compose"

class Post extends Component {
    render() {
        const{
            title
        } = this.props.data.contentfulPost
        return(
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}

Post.PropTypes = {
    data: PropTypes.object.isRequired
}

export default Post

export const pageQuery = graphql`
    query postQuery($slug: String!){
        contentfulPost(slug: {eq: $slug}) {
            title
            slug
        }
    }
`