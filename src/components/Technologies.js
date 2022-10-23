import React, { useState } from "react";
import styled from "styled-components";

import AnimateIn from "./general/AnimateIn";

import WWWIcon from "../assets/icons/www.svg";
import DatabaseIcon from "../assets/icons/database.svg";
import CogIcon from "../assets/icons/cog.svg";

import Html from "../assets/icons/html.svg";
import Javascript from "../assets/icons/javascript.svg";
import Css from "../assets/icons/css.svg";
import Typescript from "../assets/icons/typescript.svg";
import ReactIcon from "../assets/icons/react-icon.svg";
import Gatsby from "../assets/icons/gatsby.svg";
import Vue from "../assets/icons/vue.svg";
import Nuxt from "../assets/icons/nuxt.svg";
import Node from "../assets/icons/nodejs.svg";
import Express from "../assets/icons/express.svg";
import Mocha from "../assets/icons/mocha.svg";
import Jest from "../assets/icons/jest.svg";
import MySQL from "../assets/icons/mysql.svg";
import Postgres from "../assets/icons/postgres.svg";
import MongoDB from "../assets/icons/mongodb.svg";
import Qlik from "../assets/icons/qlik.svg";
import PowerBI from "../assets/icons/powerbi.svg";
import D3 from "../assets/icons/d3.svg";
import Python from "../assets/icons/python.svg";
import Github from "../assets/icons/github.svg";
import Bitbucket from "../assets/icons/bitbucket.svg";
import SourceTree from "../assets/icons/sourcetree.svg";
import Jira from "../assets/icons/jira.svg";
import Asana from "../assets/icons/asana.svg";
import AWS from "../assets/icons/aws.svg";
import Azure from "../assets/icons/azure.svg";

const badges = [
    {
        icon: <WWWIcon className="icon" />,
        color: "primary",
        title: "Web",
        description:
            "I have experience with most popular web development tools. React and Vue are my bread and butter but I'm always trying out and learning new things.",
    },
    {
        icon: <DatabaseIcon className="icon" />,
        color: "secondary",
        title: "Data",
        description:
            "Having a background in Business Intelligence I'm very familiar with most products related to data storage, transformation and visualisation.",
    },
    {
        icon: <CogIcon className="icon" />,
        color: "tertiary",
        title: "Other",
        description:
            "And the other things we need as developers. I'm not sure how I'd survive without Jira.",
    },
];

const Technologies = () => {
    const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);

    return (
        <Wrapper color={badges[activeBadgeIndex].color} className="page-section">
            <div className="anchor" id="technologies"></div>
            <div className="content">
                <AnimateIn>
                    <div className="page-section__header">
                        <h2 className="page-section__header__title">Technologies</h2>
                        <div className="text--large page-section__header__subtitle">
                            Some of my favourite tools
                        </div>
                    </div>
                </AnimateIn>
                <AnimateIn>
                    <div className="badge-container">
                        {badges.map((badge, i) => (
                            <div
                                key={i}
                                className={`badge-box  ${activeBadgeIndex === i ? "active" : ""}`}
                                onClick={() => setActiveBadgeIndex(i)}
                                onKeyDown={() => setActiveBadgeIndex(i)}
                                tabIndex="0"
                                role="button"
                            >
                                <div className={`badge badge--${badge.color}`}>{badge.icon}</div>
                            </div>
                        ))}
                    </div>
                    <div className="description-container">
                        <h5 className="group-title">{badges[activeBadgeIndex].title}</h5>
                        <p className="group-description">{badges[activeBadgeIndex].description}</p>
                    </div>
                    <div className={`rect rect--${badges[activeBadgeIndex].color}`} />
                </AnimateIn>
                {activeBadgeIndex === 0 && (
                    <AnimateIn>
                        <div className="canvas canvas--frontend">
                            <div className="canvas-row">
                                <div className="group the-basics">
                                    <div className="text--large title">Fundamentals</div>
                                    <div className="group-row">
                                        <Html className="icon" />
                                        <Javascript className="icon javascript" />
                                        <Css className="icon" />
                                    </div>
                                    <p className="subtitle">Html, Javascript & CSS</p>
                                    <div className="group-row">
                                        <Typescript className="icon" />
                                    </div>
                                    <p className="subtitle">Typescript</p>
                                </div>
                                <div className="group frameworks">
                                    <div className="text--large title">Frameworks</div>
                                    <div className="group-row">
                                        <ReactIcon className="icon" />
                                        <Gatsby className="icon" />
                                    </div>
                                    <p className="subtitle">React & Gatsby</p>
                                    <div className="group-row">
                                        <Vue className="icon" />
                                        <Nuxt className="icon" />
                                    </div>
                                    <p className="subtitle">Vue & Nuxt</p>
                                </div>
                            </div>
                            <div className="canvas-row no-margin-btm ">
                                <div className="group backend">
                                    <div className="text--large title">Backend</div>
                                    <div className="group-row">
                                        <Node className="icon" />
                                        <Express className="icon" />
                                    </div>
                                    <p className="subtitle no-margin-btm">NodeJS & Express</p>
                                </div>
                                <div className="group testing">
                                    <div className="text--large title">Testing</div>
                                    <div className="group-row">
                                        <Mocha className="icon" />
                                        <Jest className="icon" />
                                    </div>
                                    <p className="subtitle no-margin-btm">Mocha & Jest</p>
                                </div>
                            </div>
                        </div>
                        <div className={`rect rect--${badges[activeBadgeIndex].color}`} />
                    </AnimateIn>
                )}
                {activeBadgeIndex === 1 && (
                    <AnimateIn>
                        <div className="canvas canvas--data">
                            <div className="canvas-row">
                                <div className="group the-basics">
                                    <div className="text--large title">Database</div>
                                    <div className="group-row">
                                        <MySQL className="icon" />
                                        <Postgres className="icon postgres" />
                                        <MongoDB className="icon" />
                                    </div>
                                    <p className="subtitle">MySQL, Postgres & MongoDB</p>
                                </div>
                                <div className="group frameworks">
                                    <div className="text--large title">Visualisation</div>
                                    <div className="group-row">
                                        <Qlik className="icon" />
                                        <PowerBI className="icon" />
                                    </div>
                                    <p className="subtitle">Qlik & PowerBI</p>
                                </div>
                            </div>
                            <div className="canvas-row no-margin-btm ">
                                <div className="group other">
                                    <div className="text--large title">Other</div>
                                    <div className="group-row">
                                        <D3 className="icon" />
                                        <Python className="icon" />
                                    </div>
                                    <p className="subtitle no-margin-btm">D3 & Python</p>
                                </div>
                            </div>
                        </div>
                        <div className={`rect rect--${badges[activeBadgeIndex].color}`} />
                    </AnimateIn>
                )}
                {activeBadgeIndex === 2 && (
                    <AnimateIn>
                        <div className="canvas canvas--workflow">
                            <div className="canvas-row">
                                <div className="group frameworks">
                                    <div className="text--large title">Project Tracking</div>
                                    <div className="group-row">
                                        <Jira className="icon" />
                                        <Asana className="icon" />
                                    </div>
                                    <p className="subtitle">Jira & Asana</p>
                                </div>
                                <div className="group other">
                                    <div className="text--large title">Cloud</div>
                                    <div className="group-row">
                                        <Azure className="icon" />
                                        <AWS className="icon" />
                                    </div>
                                    <p className="subtitle no-margin-btm">Azure & AWS</p>
                                </div>
                            </div>
                            <div className="canvas-row no-margin-btm ">
                                <div className="group the-basics">
                                    <div className="text--large title">Source Control</div>
                                    <div className="group-row">
                                        <Github className="icon" />
                                        <Bitbucket className="icon bitbucket" />
                                        <SourceTree className="icon" />
                                    </div>
                                    <p className="subtitle">
                                        Github, Bitbucket <br /> & Sourcetree
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`rect rect--${badges[activeBadgeIndex].color}`} />
                    </AnimateIn>
                )}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    transition: all 0.75s ease;
    background-color: ${props => {
        const colorKey = `${props.color}Background`;
        return props.theme.color[colorKey];
    }};
    padding-bottom: ${props => props.theme.spacing.xl};

    .badge-container {
        display: flex;
        justify-content: space-around;
        margin-bottom: ${props => props.theme.spacing.l};

        .badge-box {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 4.75rem;
            width: 4.75rem;

            .badge {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 4rem;
                width: 4rem;
                background: ${props => props.theme.color.primary};
                box-shadow: 3px -3px 0px ${props => props.theme.color.primaryDark};
                border-radius: 16px;
                transition: all 0.25s ease;

                .icon {
                    height: 2.5rem;
                    transition: all 0.25s ease;
                }
            }

            &.active {
                .badge {
                    transform: scale(1.15);
                }
            }

            .badge--secondary {
                background: ${props => props.theme.color.secondary};
                box-shadow: 3px -3px 0px ${props => props.theme.color.secondaryDark};
            }

            .badge--tertiary {
                background: ${props => props.theme.color.tertiary};
                box-shadow: 3px -3px 0px ${props => props.theme.color.tertiaryDark};
            }
        }
    }

    .description-container {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.xl};

        .group-title {
            margin-bottom: ${props => props.theme.spacing.s};
        }
    }

    .rect {
        width: 6rem;
        opacity: 50%;
        margin-left: auto;
        margin-right: auto;
        transition: all 0.75s ease;
        height: 0.375rem;
        background-color: ${props => props.theme.color.primary};
    }
    .rect--secondary {
        background-color: ${props => props.theme.color.secondary};
    }
    .rect--tertiary {
        background-color: ${props => props.theme.color.tertiary};
    }

    .canvas {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: ${props => props.theme.spacing.xl};
        margin-bottom: ${props => props.theme.spacing.xl};

        &-row {
            .group {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: ${props => props.theme.spacing.l};

                .group-row {
                    display: flex;
                    justify-content: space-around;
                    min-width: 50%;
                    align-items: flex-end;
                    gap: ${props => props.theme.spacing.s};
                    margin-bottom: ${props => props.theme.spacing.m};
                }

                .title {
                    display: none;
                    margin-bottom: ${props => props.theme.spacing.m};
                }

                .subtitle {
                    color: ${props => props.theme.color.fontMedium};
                    text-align: center;
                    margin-bottom: ${props => props.theme.spacing.l};
                }
            }

            &:last-of-type {
                margin-bottom: 0;

                .group:last-of-type {
                    margin-bottom: 0;

                    .subtitle {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .icon {
            height: 3rem;
            max-width: 6rem;
            transition: all 0.375s ease;

            &:hover {
                transform: translateY(-6px);
            }
        }

        .javascript {
            margin-bottom: ${props => props.theme.spacing.m};
        }

        .postgres {
            margin-bottom: ${props => props.theme.spacing.m};
        }
        .bitbucket {
            margin-bottom: ${props => props.theme.spacing.m};
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .badge-container {
            width: 24rem;
            margin-left: auto;
            margin-right: auto;

            .badge-box {
                height: 5.25rem;
                width: 5.25rem;

                .badge {
                    height: 4.5rem;
                    width: 4.5rem;

                    .icon {
                        height: 2.75rem;
                    }
                }
            }
        }

        .description-container {
            height: 6rem;
            width: 40rem;
            margin-left: auto;
            margin-right: auto;
        }

        .canvas {
            width: 40rem;
            height: 34rem;
            margin-left: auto;
            margin-right: auto;

            .canvas-row {
                display: flex;
                justify-content: center;
                gap: ${props => props.theme.spacing.xl};
                margin-bottom: ${props => props.theme.spacing.xl};

                .group {
                    width: 17rem;
                    margin-bottom: 0;
                }

                .group-row {
                    min-width: 11rem;
                    margin-bottom: ${props => props.theme.spacing.m};
                }

                .title {
                    display: block;
                }

                &:last-of-type {
                    margin-bottom: 0;
                    .group {
                        .subtitle {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }

        .express {
            width: 2rem;
        }
    }
`;

export default Technologies;
