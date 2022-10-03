import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

import LinkedInIcon from "../../assets/icons/linkedin-outline.svg";
import GithubIcon from "../../assets/icons/github-outline.svg";
import EmailIcon from "../../assets/icons/email.svg";
import CaretIcon from "../../assets/icons/caret-up.svg";
import { Link } from "gatsby";

const Footer = () => {
    return (
        <Wrapper>
            <div className="content">
                <div className="logo">
                    <Logo alt />
                </div>
                <div className="return-circle">
                    <Link to="/#hero">
                        <CaretIcon className="caret" />
                    </Link>
                </div>
                <div className="container">
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
                        <a href="mailto.com" target="_blank" rel="noreferrer">
                            <EmailIcon className="icon icon--email" />
                        </a>
                    </div>
                    <div className="copyright">
                        <div className="text--small">Designed & Built by Chris Braley</div>
                        <div className="text--small">2022 &copy;. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    background-color: ${props => props.theme.color.primaryDark};
    color: ${props => props.theme.color.fontLight};

    .content {
        position: relative;
    }

    .logo {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2rem;
    }

    .return-circle {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2rem;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        background-color: ${props => props.theme.color.tertiary};
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${props => props.theme.color.tertiaryDark};

        &:hover {
            background-color: ${props => props.theme.color.tertiaryDark};
        }

        .caret {
            height: 1.125rem;
        }
    }

    .container {
        height: ${props => props.theme.position.footerHeight};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${props => props.theme.spacing.s};

        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: ${props => props.theme.spacing.l};

            .icon {
                height: ${props => props.theme.font.size.mobile.xl};
                stroke: ${props => props.theme.color.fontLight};
                fill: none;

                &:hover {
                    opacity: 0.75;
                }
            }

            .icon--email {
                fill: ${props => props.theme.color.fontLight};
            }
        }

        .copyright {
            text-align: center;
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    }
`;
