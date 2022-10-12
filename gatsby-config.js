module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Chris Codes",
        description:
            "I’m a full stack web developer and coffee enthusiast (addict?). I have a passion for clean code and great user experiences.",
        siteUrl: "https://www.chriscodes.com.au",
        image: "/og-image.png",
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
