module.exports = {
  siteMetadata: {
    title: `MTDev blog`,
    menuLinks: {
      pl: [
        {
          name: 'blog',
          link: '/pl'
        },
        {
          name: 'portfolio',
          link: '/pl/portfolio'
        },
        {
          name: 'o mnie',
          link: '/pl/about'
        },
      ],
      en: [
        {
          name: 'blog',
          link: '/en'
        },
        {
          name: 'portfolio',
          link: '/en/portfolio'
        },
        {
          name: 'about me',
          link: '/en/about'
        },     
      ]
    },
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Michal Trybus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-client-side-redirect`
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
/**
 * 
 * 
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'MsR6FTXmrRHmv3J6Kofbpwtt',
        homeSlug: 'home',
        version: 'draft'
      }
    },
 */
