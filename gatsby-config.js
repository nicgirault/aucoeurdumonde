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
    siteImage: `/android-chrome-512x512.png`,
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
            slug: `/blog`,
          },
          {
            title: `Photos`,
            slug: `/photos`,
          },
          {
            title: `+ d'infos`,
            slug: `/infos`,
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
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
