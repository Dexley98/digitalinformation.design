require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: `digital-information.design`,
    description: `The new site for Winthrop's Digital Information Design Degree Program.`,
    author: `Dom Exley`
  },
  plugins: [
    // this is where the issues are coming from in npm install. Leaves vulnerabilites and changes to ../files.? 
    // no current fix, but this mean the data is open to manipulation.
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },

    // I am considering removing all of these plugins. If it were for the fact that I don't know if we need them.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `digitalinformation.design`,
        short_name: `DIF.D`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/DIFD-logo.png`, // This path is relative to the root of the site.
      },
    }
  ],
}