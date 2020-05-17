require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Au coeur du monde`,
    siteTitleAlt: `Au coeur du monde`,
    siteHeadline: "Au coeur du monde",
    siteUrl: "https://aucoeurdumonde.org",
    siteDescription: `Le blog de voyage de deux amis pendant un an à la découverte des religions.`,
    siteLanguage: `fr`,
    siteImage: `/logo.png`,
    author: "Nicolas & Olivier",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Présentation`,
            slug: `/presentation`,
          },
          {
            title: `Préparatifs`,
            slug: `/preparatifs`,
          },
          {
            title: `Carnet de route`,
            slug: `/carnet-de-route`,
          },
          {
            title: `Photos`,
            slug: `/galeries`,
          },
          {
            title: `+ d'infos`,
            slug: `/plus-d-infos`,
          },
        ],
        externalLinks: [],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Au coeur du monde`,
        short_name: `Au coeur du monde`,
        description: `Le blog de voyage de deux amis pendant un an à la découverte des religions.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#795548`,
        display: `standalone`,
        icons: [
          {
            src: `/logo.png`,
            sizes: `150x100`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
  ],
};
