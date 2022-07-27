/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const autoprefixer = require('autoprefixer');
const browserslist = require('browserslist');

const website = require('./config/website');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.titleAlt,
        short_name: website.shortName,
        description: website.description,
        start_url: '/',
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[folder]__[local]'
        },
        implementation: require("node-sass"),
        postCssPlugins: [autoprefixer({ overrideBrowserslist: browserslist() })],
        sassOptions: {
          includePaths: ['src/styles'],
        }
      }
    },
    'gatsby-plugin-sitemap',
    // Must be placed at the end
    'gatsby-plugin-offline'
  ],
  siteMetadata: {
    author: website.author,
    banner: website.banner,
    description: website.description,
    faviconIco: website.faviconIco,
    headline: website.headline,
    logo: website.logo,
    ogLanguage: website.ogLanguage,
    shortName: website.shortName,
    siteLanguage: website.siteLanguage,
    siteUrl: website.siteUrl,
    title: website.title,
    titleTemplate: website.titleTemplate
  }
};
