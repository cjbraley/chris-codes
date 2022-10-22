import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import AnimateIn from "./general/AnimateIn";
import Project from "./project/Project";

import NuteLogo from "../assets/icons/nute.svg";
import GuestimateLogo from "../assets/icons/guestimate.svg";

const query = graphql`
    query {
        allFile(sort: { fields: name }) {
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
    const imagesGuestimate = nodes.filter(node => node.name.includes("guestimate"));
    const imagesNute = nodes.filter(node => node.name.includes("nute"));

    const projects = [
        {
            title: "nüte",
            description:
                "The online store for health foods brand nüte. The brand operates out of Honk Kong and has a focus on on all-natural, nutritious ingredients. Their signature product is the icebar smoothie.",
            logo: NuteLogo,
            logoStyles: { width: "4rem" },
            images: imagesNute,
            githubLink: "https://github.com/cjbraley/nutefoods-frontend",
            projectLink: "https://nutefoods-demo.com/",
        },
        {
            title: "Guestimate",
            description:
                "Guestimate offers a calculator that estimates how your net worth will change over time using simple inputs like income and expenses.",
            logo: GuestimateLogo,
            logoStyles: { width: "8rem" },
            images: imagesGuestimate,
            githubLink: "https://github.com/cjbraley/Guestimate",
            projectLink: "https://www.guestimate-calculator.com",
        },
    ];

    return (
        <Wrapper>
            <div className="anchor" id="projects"></div>
            <div className="content">
                <AnimateIn>
                    <div className="page-section__header">
                        <h2 className="page-section__header__title">Projects</h2>
                        <div className="text--large page-section__header__subtitle">
                            Some things I've built
                        </div>
                    </div>
                </AnimateIn>

                {projects.map((project, i) => (
                    <div key={i}>
                        <AnimateIn>
                            <div className={`lines${i === 0 ? "--first" : ""}`}>
                                <div className="line-vertical line-v1" />
                                <div className="line-horizontal line-h1" />
                                <div className="line-vertical line-v2" />
                            </div>

                            <div>
                                <Project
                                    images={project.images}
                                    logo={project.logo}
                                    logoStyles={project.logoStyles}
                                    title={project.title}
                                    description={project.description}
                                    projectLink={project.projectLink}
                                    githubLink={project.githubLink}
                                    alignment={i % 2 === 0 ? "left" : "right"}
                                />
                            </div>
                        </AnimateIn>
                    </div>
                ))}
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
        .content {
            max-width: 68rem;
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
