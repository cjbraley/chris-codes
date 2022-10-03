import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Button from "./general/Button";
import DeskIcon from "../assets/icons/hero-desk.svg";
import GithubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

const Hero = () => {
    return (
        <Wrapper>
            <div class="anchor" id="hero"></div>

            <div className="content">
                <div className="hero">
                    <div className="hero__info typewriter">
                        <h1 className="title">Hi, I'm Chris Braley.</h1>
                        <div className="text--large text">
                            I’m a full stack web developer and coffee enthusiast (addict?). I have a
                            passion for clean code and great user experiences. Check out my projects
                            below.
                        </div>
                        <div className="link-container">
                            <Link to="/contact">
                                <Button color="tertiary">CONTACT</Button>
                            </Link>
                            <a href="https://github.com/cjbraley" target="_blank" rel="noreferrer">
                                <GithubIcon className="icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/christopher-b-913439103/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon className="icon" />
                            </a>
                        </div>
                    </div>
                    <DeskIcon className="hero__desk" />
                </div>

                <div className="hero-rect-1"></div>
                <div className="hero-rect-2"></div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    left: 0px;
    right: 0px;
    top: 0px;
    position: relative;

    background: ${props => props.theme.color.primaryBackground};
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
    /* border-bottom-right-radius: 4rem; */

    .hero {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: ${props => props.theme.spacing.xl};

        &__info {
            display: flex;
            flex-direction: column;
            gap: ${props => props.theme.spacing.s};
            width: 40rem;
            padding-bottom: 12rem;
            padding-top: 8.5rem;

            .text {
                color: ${props => props.theme.color.fontMedium};
            }

            .link-container {
                display: flex;
                align-items: center;
                gap: ${props => props.theme.spacing.s};

                .icon {
                    height: ${props => props.theme.spacing.l};

                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }

        &__desk {
            height: 24rem;
        }
    }

    .hero-rect-1 {
        position: absolute;
        width: calc((100% - 1200px) / 2 + 7.5rem);
        height: 1rem;
        left: 0px;
        bottom: 1rem;
        background: ${props => props.theme.color.secondary};
    }

    .hero-rect-2 {
        position: absolute;
        width: calc((100% - 1200px) / 2 + 15rem);
        height: 1rem;
        left: 0px;
        bottom: 0rem;
        background: ${props => props.theme.color.primary};
    }
`;

export default Hero;
