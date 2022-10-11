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
            <div className="anchor" id="projects"></div>
            <div className="content">
                <div className="page-section__header">
                    <h2 className="page-section__header__title">Projects</h2>
                    <div className="text--large page-section__header__subtitle">
                        Some things I've built
                    </div>
                </div>

                <div className="lines--first">
                    <div className="line-vertical line-v1" />
                    <div className="line-horizontal line-h1" />
                    <div className="line-vertical line-v2" />
                </div>
                <div className="project">
                    <NuteLogo className="project__logo--desktop nute" />
                    <div className="project__description">
                        <div className="flex">
                            <h5 className="title">nüte</h5>
                            <NuteLogo className="project__logo nute" />
                        </div>
                        <p className="text">
                            nüte is an ecommerce website for health food brands. The brand
                            specialises in the sale of their signature icebar smoothies. Order a
                            bundle today
                        </p>
                    </div>
                    <GatsbyImage
                        image={getImage(imageNute)}
                        alt={imageNute.name}
                        className="project__img"
                    />
                    <div className="project__links">
                        <a href="https://github.com/cjbraley" target="_blank" rel="noreferrer">
                            <GithubIcon className="icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/christopher-b-913439103/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkIcon className="icon" />
                        </a>
                    </div>
                    <div className="rect" />
                    <div className="project__stack">
                        <p>React | Gatsby | Strapi | Vultr </p>
                    </div>
                </div>

                <div className="lines">
                    <div className="line-vertical line-v1" />
                    <div className="line-horizontal line-h1" />
                    <div className="line-vertical line-v2" />
                </div>

                <div className="project project--right">
                    <GuestimateLogo className="project__logo project__logo--desktop guestimate" />
                    <div className="project__description">
                        <div className="flex">
                            <h5 className="title">Guestimate</h5>
                            <GuestimateLogo className="project__logo guestimate" />
                        </div>
                        <p className="text">
                            nüte is an ecommerce website for health food brands. The brand
                            specialises in the sale of their signature icebar smoothies. Order a
                            bundle today
                        </p>
                    </div>
                    <GatsbyImage
                        image={getImage(imageGuestimate)}
                        alt={imageGuestimate.name}
                        className="project__img"
                    />
                    <div className="project__links">
                        <a href="https://github.com/cjbraley" target="_blank" rel="noreferrer">
                            <GithubIcon className="icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/christopher-b-913439103/"
                            target="_blank"
                            rel="noreferrer"
                        >
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

    .page-section__header {
        margin-bottom: ${props => props.theme.spacing.xs};
    }

    .project {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: ${props => props.theme.spacing.m};

        &:last-of-type {
            margin-bottom: 0;
        }

        .project__logo--desktop {
            display: none;
        }

        .nute {
            height: 4rem;
        }
        .guestimate {
            width: 8rem;
        }

        &__description {
            padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.m};
            border-top-right-radius: 0.375rem;
            border-top-left-radius: 0.375rem;
            background-color: #e7ecf6;

            .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: ${props => props.theme.spacing.m};

                &__logo {
                    max-height: 4rem;
                }
            }

            .title {
                font-family: ${props => props.theme.font.family.secondary}, sans-serif;
            }
        }

        &__img {
            margin-bottom: ${props => props.theme.spacing.m};
        }

        &__links {
            display: flex;
            flex-grow: 1;
            gap: ${props => props.theme.spacing.s};
            margin-bottom: ${props => props.theme.spacing.m};

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
            margin-bottom: ${props => props.theme.spacing.m};

            &.rect--secondary {
                background: ${props => props.theme.color.secondary};
            }
        }
    }

    .lines {
        margin-bottom: ${props => props.theme.spacing.s};

        .line-v1 {
            height: ${props =>
                props.theme.line.dashTotal * 4 +
                props.theme.line.dashTotal -
                props.theme.line.dashLength}px;
            margin-right: auto;
            margin-left: 3rem;
        }

        .line-h1 {
            width: calc(100% - 6rem);
            transform: translateX(-1px);
            margin-left: 3rem;
        }

        .line-v2 {
            height: ${props => props.theme.line.dashTotal * 4}px;
            margin-left: auto;
            margin-right: 3rem;
        }
    }

    .lines--first {
        width: 100%;
        padding-left: 3rem;
        padding-right: 3rem;
        margin-bottom: ${props => props.theme.spacing.s};

        .line-v1 {
            height: ${props =>
                props.theme.line.dashTotal * 3 +
                props.theme.line.dashTotal -
                props.theme.line.dashLength}px;
            margin-left: auto;
            margin-right: auto;
        }

        .line-h1 {
            width: calc(50%);
            transform: translateX(-1px);
        }

        .line-v2 {
            display: ${props => (props.isMiddle ? "none" : "block")};
            height: ${props => props.theme.line.dashTotal * 4}px;
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .project {
            position: relative;
            height: 33rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: ${props => props.theme.spacing.m};

            &:last-of-type {
                margin-bottom: ${props => props.theme.spacing.xl};
            }

            .project__logo--desktop {
                display: initial;
            }

            &__description {
                max-width: 40rem;
                padding: ${props => props.theme.spacing.m};
                /* margin-top: ${props => props.theme.spacing.l}; */

                .title {
                    margin-bottom: ${props => props.theme.spacing.m};
                }

                .flex {
                    margin: 0;
                    padding: 0;

                    .project__logo {
                        display: none;
                    }
                }
            }

            &__img {
                position: absolute;
                z-index: -1;
                height: calc(100% + 2rem);
                right: 0;
                top: 0rem;
                max-height: 38rem;
            }

            .rect {
                margin-bottom: 0;
            }

            &.project--right {
                align-items: flex-end;

                .project__description {
                    text-align: right;
                }

                .project__img {
                    left: 0;
                    right: initial;
                }
            }
        }

        .lines {
            margin-bottom: ${props => props.theme.spacing.s};

            .line-v1 {
                height: ${props =>
                    props.theme.line.dashTotal * 7 +
                    props.theme.line.dashTotal -
                    props.theme.line.dashLength}px;
                margin-left: 2rem;
            }

            .line-h1 {
                width: calc(100% - 4rem);
                margin-left: 2rem;
            }

            .line-v2 {
                height: ${props => props.theme.line.dashTotal * 7}px;
                margin-right: 2rem;
            }
        }

        .lines--first {
            width: 100%;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`;

export default Projects;
