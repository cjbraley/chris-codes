import React from "react";
import styled from "styled-components";

const Seo = ({
    Logo,
    company,
    link,
    position,
    description,
    responsibilities,
    technologies,
    color,
    handleClick,
}) => {
    return (
        <Wrapper color={color}>
            <div className="container">
                <div className="header">
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="header__link"
                        aria-label={`Visit ${company} site.`}
                    >
                        <Logo className="logo" />
                    </a>
                    <div className="header__text">
                        <h3 className="title">{company}</h3>
                        <div className="text--large subtitle">{position}</div>
                    </div>
                </div>
                <p className="experience-description">{description}</p>
                {responsibilities.length > 0 && (
                    <div>
                        <h3 className="sub-header">Key Responsibilities</h3>
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
                        <h3 className="sub-header">Primary Technologies</h3>
                        <div className="icon-container">
                            {technologies.map((Icon, i) => (
                                <Icon key={i} className="icon" />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div
                className="rect rect--secondary"
                onClick={handleClick}
                onKeyDown={handleClick}
                role="button"
                tabIndex="0"
                aria-label="next"
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    border-radius: 0.55rem;
    overflow: hidden;
    position: relative;

    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);

    /* .closed {
        transform: translateY(-100%);
    } */

    .rect {
        cursor: pointer;
        position: absolute;
        top: 0;
        height: 1rem;
        width: 100%;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        transition: all 0.75s ease;
        background-color: ${props => props.theme.color[props.color]};
    }

    .container {
        margin-top: 1rem;
        padding-left: ${props => props.theme.spacing.s};
        padding-right: ${props => props.theme.spacing.s};
        padding-top: ${props => props.theme.spacing.l};
        padding-bottom: ${props => props.theme.spacing.l};
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.spacing.l};
        background-color: ${props => props.theme.color.primaryBackground};
        transition: all 0.75s ease;

        .header {
            text-align: center;
            display: flex;
            flex-direction: column;

            &__text {
                order: 2;
            }

            &__link {
                order: 1;
            }
        }

        .logo {
            height: 2.5rem;
            max-width: 10rem;
            margin-bottom: ${props => props.theme.spacing.s};
        }

        .sub-header {
            margin-bottom: ${props => props.theme.spacing.s};
            text-align: center;
        }

        .experience-description {
            text-align: center;
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
            justify-content: center;
            flex-wrap: wrap;

            .icon {
                height: 2rem;
                transition: all 0.25s ease;

                &:hover {
                    transform: translateY(-4px);
                }
            }
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        max-width: 44rem;
        border-radius: 1rem;

        .rect {
            border-top-right-radius: 1rem;
            border-top-left-radius: 1rem;
        }

        .container {
            margin-top: 1rem;
            padding-left: ${props => props.theme.spacing.l};
            padding-right: ${props => props.theme.spacing.l};

            .header {
                text-align: left;
                flex-direction: row;
                justify-content: space-between;


                &__text {
                    order: 1;
                }

                &__link {
                    order: 2;
                }
            }

            .sub-header {
                text-align: left;
            }

            .experience-description {
                text-align: left;
            }

            .icon-container {
                justify-content: flex-start;
            }
    }
`;

export default Seo;
