import React, { useMemo } from "react";
import styled from "styled-components";

const Timeline = ({ labels = [], activeIndex, clickHandler }) => {
    const isMiddle = useMemo(() => {
        return labels.length % 2 === 1 && activeIndex + 1 === Math.ceil(labels.length / 2);
    }, [labels, activeIndex]);

    return (
        <Wrapper activeIndex={activeIndex} length={labels.length} isMiddle={isMiddle}>
            <div className="timeline">
                <div className="line line--dashed" />
                {labels.map((date, i) => {
                    return (
                        <div key={i} className="section">
                            <div className="timepoint">
                                <p className={`label ${activeIndex === i ? "" : "hidden"}`}>
                                    {date}
                                </p>
                                <div
                                    className={`circle ${i === activeIndex ? "active" : ""}`}
                                    onClick={() => clickHandler(i)}
                                ></div>
                            </div>
                            {i !== labels.length - 1 && <div className="line" />}
                        </div>
                    );
                })}
                <div className="line line--dashed" />
            </div>
            <div className="line-vertical line-1" />
            <div className="line-horizontal line-2" />
            <div className="line-vertical line-3" />
        </Wrapper>
    );
};

// timeline
const lineHeight = 0.25; //rem
const dashWidth = 1.5; // rem
const dashGap = 0.25; //rem
const dashTotal = dashWidth + dashGap;
const dashedLineWidth = dashTotal * 2; // rem
const dashXOffset = -0.5 * dashWidth; // rem
const circleMargin = 0.25; //rem
const circleWidth = 2;

const fullLineWidth = (dashedLineWidth * 3) / 2;

//lines below
const baseXOffset = dashedLineWidth + circleWidth / 2 + circleMargin;
const xOffset = index => baseXOffset + index * (fullLineWidth + circleWidth + circleMargin * 2);

const Wrapper = styled.div`
    .timeline {
        display: flex;
        .line {
            width: ${(dashedLineWidth * 3) / 2}rem;
            border-bottom: ${lineHeight}rem solid ${props => props.theme.color.fontMedium};
            transform: translateY(calc(-1rem + ${lineHeight / 2}rem));
        }

        .line--dashed {
            width: ${dashedLineWidth}rem;
            border: none;
            background-image: linear-gradient(
                to right,
                ${props => props.theme.color.fontMedium} ${(dashWidth / dashTotal) * 100}%,
                rgba(255, 255, 255, 0) 0%
            );
            background-position: calc(${dashXOffset}rem) calc(100%); // stroke offset: ;
            background-size: ${dashWidth + dashGap}rem ${lineHeight}rem; // stroke + gap width | height: ;
            background-repeat: repeat-x;
        }

        .section {
            display: flex;
        }

        .timepoint {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            padding-top: 2rem;

            .circle {
                cursor: pointer;
                height: ${circleWidth}rem;
                width: ${circleWidth}rem;
                border-radius: 50%;
                border: ${lineHeight}rem solid ${props => props.theme.color.primary};
                margin: 0 ${circleMargin}rem;
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
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                transition: all 0.5s ease;
                &.hidden {
                    color: ${props => props.theme.color.backgroundLight};
                }
            }
        }
    }

    .line-vertical {
        opacity: 50%;
        width: ${props => props.theme.line.dashWidth}px;

        /*Vertical*/
        background-image: linear-gradient(
            ${props => props.theme.color.fontSubtle}
                ${props => (props.theme.line.dashLength / props.theme.line.dashTotal) * 100}%,
            rgba(255, 255, 255, 0) 0%
        );
        background-position: 0 ${props => props.theme.line.dashWidth}px;
        background-size: ${props => props.theme.line.dashWidth}px
            ${props => props.theme.line.dashTotal}px;
        background-repeat: repeat-y;
        transform: translateX(-50%);
    }

    .line-1 {
        height: ${props =>
            props.isMiddle
                ? `calc(${props.theme.line.dashTotal * 6}px + ${props.theme.line.dashWidth}px)`
                : `${props.theme.line.dashTotal * 4}px`};
        margin-left: ${props => xOffset(props.activeIndex)}rem;
    }

    .line-3 {
        display: ${props => (props.isMiddle ? "none" : "block")};
        height: ${props => props.theme.line.dashTotal * 2}px;
        margin-left: auto;
        margin-right: auto;
    }

    .line-horizontal {
        opacity: 50%;
        height: ${props => props.theme.line.dashWidth}px;
        background-image: linear-gradient(
            to right,
            ${props => props.theme.color.fontSubtle} 80%,
            rgba(255, 255, 255, 0) 0%
        );
        background-position: 0px 0px;
        background-size: 0.75rem 2px; // stroke + gap width | height: ;
        background-repeat: repeat-x;
    }

    .line-2 {
        display: ${props => (props.isMiddle ? "none" : "block")};
        margin-left: ${props =>
            props.activeIndex + 1 <= props.length / 2
                ? `calc(${xOffset(props.activeIndex)}rem - 1px)`
                : `calc(50% - 1px)`};
        width: ${props =>
            props.activeIndex + 1 <= props.length / 2
                ? `calc(50% - ${xOffset(props.activeIndex)}rem + 2px)`
                : `calc(${xOffset(props.activeIndex)}rem - 50% + 2px)`};
    }
`;

export default Timeline;
