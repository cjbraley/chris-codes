import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import NuteLogo from "../assets/icons/nute.svg";
import GuestimateLogo from "../assets/icons/guestimate.svg";
import GithubIcon from "../assets/icons/github-outline.svg";
import LinkIcon from "../assets/icons/link.svg";

const query = graphql`
    query {
        allFile {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
            }
        }
    }
`;

const Projects = () => {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes;
    const imageGuestimate = nodes.filter(node => node.name.includes("Guestimate"))[0];
    const imageNute = nodes.filter(node => node.name.includes("nute"))[0];
    return (
        <Wrapper>
            <div class="anchor" id="projects"></div>
            <div className="content">
                <div className="section-header">
                    <h2 className="title">Projects</h2>
                    <div className="text--large subtitle">Some things I've built</div>
                </div>
                <div className="project">
                    <div className="lines-first">
                        <div className="line-vertical line-1" />
                        <div className="line-horizontal line-2" />
                        <div className="line-vertical line-3" />
                    </div>
                    <NuteLogo className="project__logo nute" />
                    <GatsbyImage
                        image={getImage(imageNute)}
                        alt={imageNute.name}
                        className="project__img"
                    />
                    <div className="project__description">
                        <h5 className="title">nüte</h5>
                        <p className="text">
                            nüte is an ecommerce website for health food brands. The brand
                            specialises in the sale of their signature icebar smoothies. Order a
                            bundle today
                        </p>
                    </div>
                    <div className="project__links">
                        <a href="" target="_blank">
                            <GithubIcon className="icon" />
                        </a>
                        <a href="" target="_blank">
                            <LinkIcon className="icon" />
                        </a>
                    </div>
                    <div className="rect" />
                    <div className="project__stack">
                        <p>React | Gatsby | Strapi | Vultr </p>
                    </div>
                </div>
                <div className="lines">
                    <div className="line-vertical line-1" />
                    <div className="line-horizontal line-2" />
                    <div className="line-vertical line-3" />
                </div>
                <div className="project project--right">
                    <GuestimateLogo className="project__logo guestimate" />
                    <GatsbyImage
                        image={getImage(imageGuestimate)}
                        alt={imageGuestimate.name}
                        className="project__img"
                    />
                    <div className="project__description">
                        <h5 className="title">Guestimate</h5>
                        <p className="text">
                            nüte is an ecommerce website for health food brands. The brand
                            specialises in the sale of their signature icebar smoothies. Order a
                            bundle today
                        </p>
                    </div>
                    <div className="project__links">
                        <a href="" target="_blank">
                            <GithubIcon className="icon" />
                        </a>
                        <a href="" target="_blank">
                            <LinkIcon className="icon" />
                        </a>
                    </div>
                    <div className="rect rect--secondary" />
                    <div className="project__stack">
                        <p>Vue 3 | D3.js | Netlify </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xl};

    .project {
        position: relative;
        height: 33rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${props => props.theme.spacing.m};

        &__logo {
            margin-bottom: ${props => props.theme.spacing.m};
        }

        .nute {
            height: 4rem;
        }
        .guestimate {
            width: 8rem;
        }

        &__img {
            position: absolute;
            z-index: -1;
            right: 0;
            top: 5rem;
            max-height: 38rem;
        }

        &__description {
            max-width: 40rem;
            padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
            border-radius: 0.375rem;
            background-color: #e7ecf6;

            .title {
                margin-bottom: ${props => props.theme.spacing.s};
                font-family: ${props => props.theme.font.family.secondary}, sans-serif;
            }
        }

        &__links {
            display: flex;
            flex-grow: 1;
            gap: ${props => props.theme.spacing.s};
            .icon {
                height: 1.5rem;
                stroke: ${props => props.theme.color.fontDark};

                &:hover {
                    opacity: 0.75;
                }
            }
        }

        .rect {
            height: 1rem;
            width: 7.5rem;
            background: ${props => props.theme.color.primary};

            &.rect--secondary {
                background: ${props => props.theme.color.secondary};
            }
        }

        &.project--right {
            align-items: flex-end;

            .project__description {
                text-align: right;
            }

            .project__img {
                left: 0;
                top: 2rem;
                right: initial;
            }
        }
    }

    .lines-first {
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;

        .line-1 {
            height: ${props =>
                props.theme.line.dashTotal * 3 +
                props.theme.line.dashTotal -
                props.theme.line.dashLength}px;
            margin-left: auto;
            margin-right: auto;
            /* transform: translateX(1px); */
        }

        .line-2 {
            width: calc(50%);
            transform: translateX(-1px);
        }

        .line-3 {
            display: ${props => (props.isMiddle ? "none" : "block")};
            height: ${props => props.theme.line.dashTotal * 4}px;
        }
    }

    .lines {
        margin-bottom: ${props => props.theme.spacing.s};

        .line-1 {
            height: ${props =>
                props.theme.line.dashTotal * 7 +
                props.theme.line.dashTotal -
                props.theme.line.dashLength}px;
            margin-right: auto;
            margin-left: 2rem;
        }

        .line-2 {
            width: calc(100% - 6rem);
            transform: translateX(-1px);
            margin-left: 2rem;
        }

        .line-3 {
            height: ${props => props.theme.line.dashTotal * 7}px;
            margin-left: auto;
            margin-right: 4rem;
        }
    }
`;

export default Projects;
