import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// https://www.gatsbyjs.com/docs/add-seo-component/

const SEO = props => {
    const { pathname } = useLocation();
    const {
        site: { siteMetadata: meta },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        image
                    }
                }
            }
        `
    );

    const seo = {
        title: props.title || meta.title,
        description: props.description || meta.description,
        image: `${meta.siteUrl}${props.image || meta.image}`,
        url: `${meta.siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title} description={seo.description}>
            <html lang="en" />
            <meta name="image" content={seo.image} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
