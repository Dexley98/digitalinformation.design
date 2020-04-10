const path = require('path');

// Create pages for concentration pages
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const studentTemplate = path.resolve('src/templates/studentPage.js');
	const parentTemplate = path.resolve('src/templates/parentPage.js');

	// Individual students and parents pages
	// All in one go
  return graphql(`
    {
			students: allContentfulConcentrationPageHome (limit:100) {
                edges {
                  node {
                    id
                    slug
                  }
                }
      }
			parents: allContentfulConcentrationPageParents(limit: 100) {
                edges {
                  node {
                    id
                    slug
                  }
                }
      }
    }
	`).then(result => {
		if (result.errors) {
            Promise.reject(result.errors);
            console.error('Something went wrong creating pages...', result.errors);
    }

		// Create students pages
		result.data.students.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug,
        component: studentTemplate,
        context: {
            slug: edge.node.slug
        }
      });
      return
    });
    
		// Create blog pages
		result.data.parents.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug + '/parents',
        component: parentTemplate,
        context: {
            slug: edge.node.slug
        }
      });
      return
		});
  });
};
