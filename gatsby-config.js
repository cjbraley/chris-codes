
module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Chris Codes",
        description: "My Portfolio",
        siteUrl: "https://www.chriscodes.com",
    },
    plugins: [
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.svg$/, // See below to configure properly
                },
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-plugin-react-helmet`,
    ],
};
