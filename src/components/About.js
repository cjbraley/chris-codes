import React, { useState } from "react";
import styled from "styled-components";

import experienceData from "../data/experiences";

import Timeline from "./about/timeline";
import Experience from "./about/experience";

const About = () => {
    const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
    return (
        <Wrapper className="page-section">
            <div className="anchor" id="about"></div>
            <div className="content">
                <div className="page-section__header">
                    <h2 className="title">About</h2>
                    <div className="text--large subtitle">A little about me</div>
                </div>
                <p className="description">
                    I’m an enthusiastic and technically inclined BI Developer with extensive
                    experience in BI system implementation, especially with Qlik Sense. Currently
                    working on the Westpac Institutional Bank’s Qlik-based data analytics platform
                    which is used to support risk management and trading activity.{" "}
                </p>
                <div className="timeline-container">
                    <Timeline
                        labels={experienceData.map(data => data.time)}
                        activeIndex={activeExperienceIndex}
                        clickHandler={setActiveExperienceIndex}
                    />
                </div>
                <div className="experience-container">
                    <Experience {...experienceData[activeExperienceIndex]} />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xl};

    .description {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.l};
        text-align: center;
    }

    .timeline-container {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.xs};
    }

    .experience-container {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .description {
            max-width: 38rem;
            margin-bottom: ${props => props.theme.spacing.xxl};
        }
        .experience-container {
            height: 42rem;
        }
    }
`;

export default About;
