import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import GithubIcon from "../../assets/icons/github-outline.svg";
import LinkIcon from "../../assets/icons/link.svg";

const Project = ({
    alignment,
    images,
    logo: Logo,
    logoStyles,
    title,
    description,
    projectLink,
    githubLink,
}) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <Wrapper className={`${alignment}`}>
            <a href={projectLink} target="_blank" rel="noreferrer" className="logo logo--desktop">
                <Logo className="nute" style={logoStyles} />
            </a>
            <div className="description">
                <div className="flex">
                    <h5 className="title">nüte</h5>
                    <Logo className="nute logo--mobile" style={logoStyles} />
                </div>
                <p className="text">{description}</p>
            </div>
            <Carousel
                renderArrowNext={() => false}
                renderArrowPrev={() => false}
                showStatus={false}
                showThumbs={false}
                selectedItem={activeImage}
                infiniteLoop={true}
                interval={2000}
                onClickItem={() => setActiveImage((activeImage + 1) % images.length)}
            >
                {images.map((image, i) => (
                    <GatsbyImage
                        key={`${image.id}`}
                        image={getImage(image)}
                        alt={`${image.name}`}
                        loading="eager"
                    />
                ))}
            </Carousel>

            <div className="links">
                <a href={githubLink} target="_blank" rel="noreferrer">
                    <GithubIcon className="icon" />
                </a>
                <a href={projectLink} target="_blank" rel="noreferrer">
                    <LinkIcon className="icon" />
                </a>
            </div>
            <div className="rect" />
            <div className="stack">
                <p>React | Gatsby | Strapi | Vultr </p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-areas:
        "description"
        "image"
        "links"
        "rect"
        "stack";

    margin-bottom: ${props => props.theme.spacing.m};

    &:last-of-type {
        margin-bottom: 0;
    }

    .logo {
        grid-area: logo;
        margin-bottom: ${props => props.theme.spacing.s};
    }

    .logo--desktop {
        display: none;
    }

    .description {
        grid-area: description;
        padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.m};
        border-top-right-radius: 0.375rem;
        border-top-left-radius: 0.375rem;
        background-color: #e7ecf6;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px;

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

    .control-dots {
        display: none;
    }

    .carousel-root {
        position: relative;
        grid-area: image;
        margin-bottom: ${props => props.theme.spacing.m};
        width: 100%;
        border-bottom-right-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        overflow: hidden;

        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px;

        img {
            border-bottom-right-radius: 0.375rem;
            border-bottom-left-radius: 0.375rem;
        }

        /* z-index: 25; */
        /* transform: scale(0.75); */

        ::before {
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: ${props => props.theme.color.fontMedium};
            opacity: 50%;
            z-index: 1;
            transition: all 0.5s ease;
            border-bottom-right-radius: 0.375rem;
            border-bottom-left-radius: 0.375rem;
            pointer-events: none;
        }

        &:hover::before {
            opacity: 0;
        }
    }

    .links {
        grid-area: links;
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
        grid-area: rect;
        height: 1rem;
        width: 7.5rem;
        background: ${props => props.theme.color.primary};
        margin-bottom: ${props => props.theme.spacing.m};

        &.rect--secondary {
            background: ${props => props.theme.color.secondary};
        }
    }

    .stack {
        grid-area: stack;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        grid-template-areas:
            "logo image"
            "description image"
            "links image"
            "rect image"
            "stack image";
        grid-template-columns: max-content(40rem) 28rem;
        grid-template-rows: auto auto 1fr auto auto;

        &:last-of-type {
            margin-bottom: ${props => props.theme.spacing.xl};
        }

        .logo--mobile {
            display: none;
        }

        .logo--desktop {
            display: initial;
        }

        .description {
            max-width: 40rem;
            padding: ${props => props.theme.spacing.m};
            border-radius: 0.375rem;
            z-index: 2;
            margin-bottom: ${props => props.theme.spacing.m};
            box-shadow: none;

            .title {
                margin-bottom: ${props => props.theme.spacing.s};
            }

            .flex {
                margin: 0;
                padding: 0;

                .project__logo {
                    display: none;
                }
            }
        }

        .carousel-root {
            cursor: pointer;
            transform: translateX(-2rem);
            width: auto;
            margin-bottom: 0;
            border-radius: 0.375rem;

            img {
                border-radius: 0.375rem;
            }

            ::before {
                border-radius: 0.375rem;
            }
        }

        .rect {
            margin-bottom: ${props => props.theme.spacing.m};
        }

        &.right {
            grid-template-areas:
                "image logo"
                "image description"
                "image links"
                "image rect"
                "image stack";
            grid-template-columns: 28rem max-content(40rem);

            .logo {
                text-align: right;
                transform: translateX(-2rem);
            }

            .description {
                text-align: right;
                transform: translateX(-2rem);

                .title {
                    flex-grow: 1;
                }
            }

            .carousel-root {
                left: 0;
                right: initial;
                transform: none;
            }

            .links {
                justify-self: flex-end;
                transform: translateX(-2rem);
            }

            .rect {
                justify-self: flex-end;
                transform: translateX(-2rem);
            }

            .stack {
                justify-self: flex-end;
                transform: translateX(-2rem);
            }
        }
    }
`;

export default Project;
