import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Experience = ({
    Logo,
    company,
    link,
    position,
    description,
    responsibilities,
    technologies,
    color,
}) => {
    const [isClosed, setIsClosed] = useState(false);
    useEffect(() => {
        setIsClosed(true);
        setTimeout(() => {
            setIsClosed(false);
        }, 750);
    }, [position]);
    console.log(position);
    return (
        <Wrapper color={color}>
            <div className={`container ${isClosed ? "closed" : ""}`}>
                <div className="header">
                    <div>
                        <h3 className="title">{company}</h3>
                        <div className="text--large subtitle">{position}</div>
                    </div>
                    <a href={link} target="_blank" rel="noreferrer">
                        <Logo className="logo" />
                    </a>
                </div>
                <p className="experience-description">{description}</p>
                {responsibilities.length > 0 && (
                    <div>
                        <h5 className="sub-header">Key Responsibilities:</h5>
                        <ul className="list">
                            {responsibilities.map((item, i) => (
                                <li key={i}>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {technologies.length > 0 && (
                    <div>
                        <h5 className="sub-header">Primary Technologies:</h5>
                        <div className="icon-container">
                            {technologies.map((Icon, i) => (
                                <Icon key={i} className="icon" />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="rect rect--secondary" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 44rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;

    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);

    /* .closed {
        transform: translateY(-100%);
    } */

    .rect {
        position: absolute;
        top: 0;
        height: 1rem;
        width: 100%;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        transition: all 0.75s ease;
        background-color: ${props => props.theme.color[props.color]};

        /* &.rect--secondary {
            background-color: ${props => props.theme.color.secondary};
        } */
    }

    .container {
        margin-top: 1rem;
        padding-left: ${props => props.theme.spacing.l};
        padding-right: ${props => props.theme.spacing.l};
        padding-top: ${props => props.theme.spacing.l};
        padding-bottom: ${props => props.theme.spacing.l};
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.spacing.m};
        background-color: ${props => props.theme.color.primaryBackground};
        transition: all 0.75s ease;

        .header {
            display: flex;
            justify-content: space-between;
        }

        .logo {
            height: 2.5rem;
            max-width: 10rem;
        }

        .sub-header {
            margin-bottom: ${props => props.theme.spacing.s};
        }
        li {
            p {
                font-size: 0.875rem;
            }
        }

        li:not(:last-child) {
            margin-bottom: 3px;
        }

        .icon-container {
            display: flex;
            gap: ${props => props.theme.spacing.s};

            .icon {
                height: 2rem;
                transition: all 0.25s ease;

                &:hover {
                    transform: translateY(-4px);
                }
            }
        }
    }
`;

export default Experience;
