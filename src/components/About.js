import React, { useState } from "react";
import styled from "styled-components";

import experienceData from "../data/experiences";

import CubaneIcon from "../assets/icons/cubane.svg";

import Timeline from "./about/timeline";
import Experience from "./about/experience";

const About = () => {
    const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
    return (
        <Wrapper>
            <div class="anchor" id="about"></div>
            <div className="content">
                <div className="section-header">
                    <h2 className="title">About</h2>
                    <div className="text--large subtitle">A little about me</div>
                </div>
                <p className="description">
                    I’m an enthusiastic and technically inclined BI Developer with extensive
                    experience in BI system implementation, especially with Qlik Sense. Currently
                    working on the Westpac Institutional Bank’s Qlik-based data analytics platform
                    which is used to support risk management and trading activity.{" "}
                </p>
            </div>
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
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xl};

    .section-header {
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .description {
        max-width: 38rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .timeline-container {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.xs};
    }

    .experience-container {
        height: 42rem;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default About;
