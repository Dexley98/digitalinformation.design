const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const siteTemplate = path.resolve('src/templates/test-post.js')
    resolve(
      graphql(`
        {
          allContentfulConcentrationPageHome (limit:100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulConcentrationPageHome.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: siteTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}