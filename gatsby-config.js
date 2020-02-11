module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: "Alex Syhabouth Portfolio",
    author: "Alex Syhabouth",
    description: "Alex Syhabouth's Portfolio Website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
