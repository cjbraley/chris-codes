import React, { useState } from "react";
import styled from "styled-components";

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
import Nuxt from "../assets/icons/Nuxt.svg";
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
    },
    {
        icon: <DatabaseIcon className="icon" />,
        color: "secondary",
    },
    {
        icon: <CogIcon className="icon" />,
        color: "tertiary",
    },
];

const Technologies = () => {
    const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);

    return (
        <Wrapper color={badges[activeBadgeIndex].color}>
            <div class="anchor" id="technologies"></div>
            <div className="content">
                <div className="section-header">
                    <h2 className="title">Technologies</h2>
                    <div className="text--large subtitle">Some of my favourite tools</div>
                </div>
                <div className="container">
                    {badges.map((badge, i) => (
                        <div
                            key={i}
                            className={`badge-container  ${activeBadgeIndex === i ? "active" : ""}`}
                            onClick={() => setActiveBadgeIndex(i)}
                        >
                            <div className={`badge badge--${badge.color}`}>{badge.icon}</div>
                        </div>
                    ))}
                </div>
                <div className="description-container">
                    <h5 className="group-title">Frontend</h5>
                    <p className="group-description">
                        Nutefoods is an ecommerce website for health food brands nute. The brand
                        specialises in the sale of their signature icebar smoothies. Order a bundle
                        today|
                    </p>
                </div>
                <div className={`rect rect--${badges[activeBadgeIndex].color}`} />
                <div className="canvas">
                    {activeBadgeIndex === 0 && (
                        <div className="canvas--frontend">
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
                    )}
                    {activeBadgeIndex === 1 && (
                        <div className="canvas--data">
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
                    )}
                    {activeBadgeIndex === 2 && (
                        <div className="canvas--workflow">
                            <div className="canvas-row">
                                <div className="group frameworks">
                                    <div className="text--large title">Project Management</div>
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
                    )}
                </div>
                <div className={`rect rect--${badges[activeBadgeIndex].color}`} />
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
    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xl};

    .section-header {
        margin-bottom: ${props => props.theme.spacing.l};
    }
    .container {
        width: 32rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-around;
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .badge-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 6rem;
        width: 6rem;

        .badge {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 5rem;
            background: ${props => props.theme.color.primary};
            box-shadow: 4px -5px 0px ${props => props.theme.color.primaryDark};
            border-radius: 16px;
            transition: all 0.25s ease;

            .icon {
                height: 3rem;
                transition: all 0.25s ease;
            }
        }

        &:hover {
            .badge {
                height: 5.5rem;
                width: 5.5rem;
                .icon {
                    height: 3.3rem;
                    width: 3.3rem;
                }
            }
        }

        &.active {
            .badge {
                height: 6rem;
                width: 6rem;
                .icon {
                    height: 3.6rem;
                    width: 3.6rem;
                }
            }
        }

        .badge--secondary {
            background: ${props => props.theme.color.secondary};
            box-shadow: 4px -5px 0px ${props => props.theme.color.secondaryDark};
        }

        .badge--tertiary {
            background: ${props => props.theme.color.tertiary};
            box-shadow: 4px -5px 0px ${props => props.theme.color.tertiaryDark};
        }
    }

    .description-container {
        max-width: 40rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.l};

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
        width: 40rem;
        height: 38rem;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .icon {
            height: 3rem;
            max-width: 6rem;
            transition: all 0.25s ease;

            &:hover {
                transform: translateY(-6px);
            }
        }

        .canvas-row {
            display: flex;
            justify-content: center;
            gap: ${props => props.theme.spacing.xl};
            margin-bottom: ${props => props.theme.spacing.xl};
        }

        .group {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 17rem;

            .group-row {
                display: flex;
                /* width: 100%; */
                min-width: 11rem;
                justify-content: center;
                justify-content: space-around;
                align-items: flex-end;
                gap: ${props => props.theme.spacing.m};
                margin-bottom: ${props => props.theme.spacing.m};
            }

            .title {
                margin-bottom: ${props => props.theme.spacing.m};
            }

            .subtitle {
                color: ${props => props.theme.color.fontMedium};
                margin-bottom: ${props => props.theme.spacing.l};
                text-align: center;
            }
        }

        .no-margin-btm {
            margin-bottom: 0;
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

        .express {
            width: 2rem;
        }
    }
`;

export default Technologies;
