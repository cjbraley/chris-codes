import React from "react";
import styled from "styled-components";

import Button from "./general/Button";
import DeskIcon from "../assets/icons/hero-desk.svg";
import GithubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

const Hero = () => {
    return (
        <Wrapper>
            <div className="anchor" id="hero"></div>
            <div className="content">
                <div className="hero">
                    <div className="hero__info typewriter">
                        <h1 className="title">Hi, I'm Chris Braley.</h1>
                        <div className="text--large text">
                            I’m a full stack web developer and coffee enthusiast (addict?). I have a
                            passion for clean code and great user experiences. Check out my projects
                            below.
                        </div>
                    </div>
                    <DeskIcon className="hero__desk" />
                    <div className="hero__links">
                        <div className="icon-container">
                            <a
                                href="https://www.linkedin.com/in/christopher-b-913439103/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon className="icon" />
                            </a>
                            <a href="https://github.com/cjbraley" target="_blank" rel="noreferrer">
                                <GithubIcon className="icon" />
                            </a>
                        </div>
                        <a
                            className="btn"
                            href="mailto:cbraley@protonmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button color="tertiary">CONTACT</Button>
                        </a>
                    </div>
                </div>

                <div className="hero-rect-1"></div>
                <div className="hero-rect-2"></div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;

    background: ${props => props.theme.color.primaryBackground};
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);

    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xxl};

    .hero {
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: ${props => props.theme.spacing.xl};
        text-align: center;

        &__info {
            grid-area: info;
            display: flex;
            flex-direction: column;
            gap: ${props => props.theme.spacing.s};

            .text {
                color: ${props => props.theme.color.fontMedium};
            }
        }

        &__links {
                grid-area: links;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: ${props => props.theme.spacing.s};

                .icon-container{
                    
                    display: flex;
                    gap: ${props => props.theme.spacing.m};
                    
                    .icon {
                        height: ${props => props.theme.spacing.l};
    
                        &:hover {
                            opacity: 0.7;
                        }
                }

                }
            }

        &__desk {
            grid-area: desk;
            width: 80%;
        }
    }

    .hero-rect-1 {
        position: absolute;
        width: 33.33%;
        height: 1rem;
        left: 0px;
        bottom: 1rem;
        background: ${props => props.theme.color.secondary};
    }

    .hero-rect-2 {
        position: absolute;
        width: 66.67%;
        height: 1rem;
        left: 0px;
        bottom: 0rem;
        background: ${props => props.theme.color.primary};
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}px) {
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        padding-top: 8rem;
        padding-bottom: 8rem;

        .hero {
            /* display: grid;
            grid-template-areas: 
            "info desk"
            "links desk";
            grid-template-columns: 40rem 1fr;
            grid-template-rows: auto 1fr; */
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
            gap: ${props => props.theme.spacing.m};

            text-align: left;



            &__info {
                width: 40rem;

            }

            &__desk {
                width: calc(100% - 42rem);
                max-height: 24rem;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0rem;
            }

        &__links {
            flex-direction: row;
            justify-content: flex-start; 
            gap: ${props => props.theme.spacing.s};

            .icon-container{
                order: 2;
                gap: ${props => props.theme.spacing.s};
            }
        }
    }

    .hero-rect-1 {
        width: calc((100% - 1200px) / 2 + 7.5rem);
    }

    .hero-rect-2 {
        width: calc((100% - 1200px) / 2 + 15rem);
    }
`;

export default Hero;
