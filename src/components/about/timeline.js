import React, { useMemo } from "react";
import styled from "styled-components";

const Timeline = ({ labels = [], activeIndex, clickHandler }) => {
    const isMiddle = useMemo(() => {
        return labels.length % 2 === 1 && activeIndex + 1 === Math.ceil(labels.length / 2);
    }, [labels, activeIndex]);

    return (
        <Wrapper activeIndex={activeIndex} length={labels.length} isMiddle={isMiddle}>
            <div className="timeline">
                <div className="timeline__line timeline__line--dashed" />
                {labels.map((date, i) => {
                    return [
                        <div key={`timepoint-${i}`} className="timepoint">
                            <p className={`label ${activeIndex === i ? "" : "hidden"}`}>{date}</p>
                            <div
                                className={`circle ${i === activeIndex ? "active" : ""}`}
                                onClick={() => clickHandler(i)}
                                onKeyDown={() => clickHandler(i)}
                                tabIndex="0"
                                role="button"
                                aria-label="Set as active"
                            ></div>
                        </div>,
                        <div
                            key={`line-${i}`}
                            className={`timeline__line ${
                                i === labels.length - 1 ? "timeline__line--dashed" : ""
                            }`}
                        />,
                    ];
                })}
            </div>
            <div className="line-vertical line-v1" />
            <div className="line-horizontal line-h1" />
            <div className="line-vertical line-v2" />
        </Wrapper>
    );
};

// timeline

// sizes desktop
const d_lineHeight = 0.225; //rem
const d_dashWidth = 1.5; // rem
const d_dashGap = 0.25; //rem
const d_dashTotal = d_dashWidth + d_dashGap;
const d_dashedLineWidth = d_dashTotal * 2; // rem
const d_dashXOffset = -0.5 * d_dashWidth; // rem
const d_circleMargin = 0.25; //rem
const d_circleWidth = 2; // rem
const d_fullLineWidth = (d_dashedLineWidth * 3) / 2;

// offset
const d_baseOffset = d_dashedLineWidth + d_circleWidth / 2 + d_circleMargin;
const d_offset = index =>
    d_baseOffset + index * (d_fullLineWidth + d_circleWidth + d_circleMargin * 2);

// sizes mobile
const m_lineHeight = 0.125; //rem
const m_dashWidth = 0.75; // rem
const m_dashGap = 0; //rem
const m_dashTotal = m_dashWidth + m_dashGap;
const m_circleMargin = 0.25; //rem
const m_circleWidth = 1.75; // rem
const m_dashedLineWidth = m_dashTotal * 2; // rem
const m_dashXOffset = -0.5 * m_dashWidth; // rem
const m_fullLineWidth = (m_dashedLineWidth * 3) / 2;

// offset
const m_baseOffset = m_dashedLineWidth + m_circleWidth / 2 + m_circleMargin;
const m_offset = index =>
    m_baseOffset + index * (m_circleMargin * 2 + m_circleWidth + m_fullLineWidth);

const Wrapper = styled.div`
    position: relative;
    .timeline {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: ${props => props.theme.spacing.xl};
        margin-bottom: ${props => props.theme.spacing.xs};

        &__line {
            height: ${m_lineHeight}rem;
            width: ${m_fullLineWidth}rem;
            border-bottom: ${m_lineHeight}rem solid ${props => props.theme.color.fontMedium};
            transform: none;
        }

        &__line--dashed {
            width: ${m_dashedLineWidth}rem;
            border: none;
            background-image: linear-gradient(
                to right,
                ${props => props.theme.color.fontMedium} ${(m_dashWidth / m_dashTotal) * 100}%,
                rgba(255, 255, 255, 0) 0%
            );
            background-position: calc(${m_dashXOffset}rem) calc(100%); // stroke offset: ;
            background-size: ${m_dashWidth + m_dashGap}rem ${m_lineHeight}rem; // stroke + gap width | height: ;
            background-repeat: repeat-x;
        }

        .timepoint {
            position: relative;

            .circle {
                cursor: pointer;
                height: ${m_circleWidth}rem;
                width: ${m_circleWidth}rem;
                border-radius: 50%;
                border: 3px solid ${props => props.theme.color.primary};
                margin: 0 ${m_circleMargin}rem;
                transition: all 0.5s ease;

                &:hover {
                    background-color: ${props => props.theme.color.primaryDark};
                }
            }

            .active {
                border-color: ${props => props.theme.color.primary};
                background-color: ${props => props.theme.color.primaryDark};
            }

            .label {
                min-width: max-content;
                position: absolute;
                top: -1.75rem;
                left: 50%;
                opacity: 1;
                transform: translateX(-50%);
                transition: all 0.5s ease;

                &.hidden {
                    opacity: 0;
                }
            }
        }
    }

    .line-v1 {
        position: initial;
        left: 0;
        height: ${props =>
            props.isMiddle
                ? `calc(${props.theme.line.dashTotal * 6}px + ${props.theme.line.dashWidth}px)`
                : `${props.theme.line.dashTotal * 4}px`};
        margin-left: ${props => m_offset(props.activeIndex)}rem;
    }

    .line-h1 {
        position: initial;
        display: ${props => (props.isMiddle ? "none" : "block")};
        margin-left: ${props =>
            props.activeIndex + 1 <= props.length / 2
                ? `calc(${m_offset(props.activeIndex)}rem - 1px)`
                : `calc(50% - 1px)`};
        width: ${props =>
            props.activeIndex + 1 <= props.length / 2
                ? `calc(50% - ${m_offset(props.activeIndex)}rem + 2px)`
                : `calc(${m_offset(props.activeIndex)}rem - 50% + 2px)`};
    }

    .line-v2 {
        position: initial;
        left: 0;
        display: ${props => (props.isMiddle ? "none" : "block")};
        height: ${props => props.theme.line.dashTotal * 2}px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .timeline {
            flex-direction: row;
            margin-bottom: ${props => props.theme.spacing.xs};

            &__line {
                height: ${d_lineHeight}rem;
                width: ${d_fullLineWidth}rem;
                border-bottom: ${d_lineHeight}rem solid ${props => props.theme.color.fontMedium};
                transform: none;
            }

            &__line--dashed {
                width: ${d_dashedLineWidth}rem;
                border: none;
                background-image: linear-gradient(
                    to right,
                    ${props => props.theme.color.fontMedium} ${(d_dashWidth / d_dashTotal) * 100}%,
                    rgba(255, 255, 255, 0) 0%
                );
                background-position: calc(${d_dashXOffset}rem) calc(100%); // stroke offset: ;
                background-size: ${d_dashWidth + d_dashGap}rem ${d_lineHeight}rem; // stroke + gap width | height: ;
                background-repeat: repeat-x;
            }

            .timepoint {
                .circle {
                    height: ${d_circleWidth}rem;
                    width: ${d_circleWidth}rem;
                    margin: 0 ${d_circleMargin}rem;
                }
            }
        }

        .line-v1 {
            margin-left: ${props => d_offset(props.activeIndex)}rem;
        }

        .line-h1 {
            margin-left: ${props =>
                props.activeIndex + 1 <= props.length / 2
                    ? `calc(${d_offset(props.activeIndex)}rem - 1px)`
                    : `calc(50% - 1px)`};
            width: ${props =>
                props.activeIndex + 1 <= props.length / 2
                    ? `calc(50% - ${d_offset(props.activeIndex)}rem + 2px)`
                    : `calc(${d_offset(props.activeIndex)}rem - 50% + 2px)`};
        }
    }
`;

export default Timeline;
