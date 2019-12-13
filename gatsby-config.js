module.exports = {
  siteMetadata: {
    title: `michal trybus`,
    description: `...`,
    author: `Michal Trybus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /assets/ 
        }
      }  
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/context/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/context/theme.js`).darkTheme,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, 
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-dark.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "STORYBLOK",
        // This is the field under which it's accessible
        fieldName: "storyblok",
        // URL to query from
        url: "https://gapi.storyblok.com/v1/api",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          token: 'MsR6FTXmrRHmv3J6Kofbpwtt',
          version: 'draft'
        },
      },
    },
    `gatsby-plugin-client-side-redirect`,
   
  ],
}
