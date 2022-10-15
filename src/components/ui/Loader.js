import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Cup from "../../assets/icons/cup.svg";
import Lid from "../../assets/icons/cup-lid.svg";
import Chris from "../../assets/icons/chris.svg";

const Loader = ({ isLoading, setIsLoading, isMounted }) => {
    const [isHidden, setIsHidden] = useState(false);

    // turn loader off after interval
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, totalDuration * 1000);

        setTimeout(() => {
            setIsHidden(true);
        }, (totalDuration + closeDuration) * 1000);
    });

    return (
        <Wrapper isLoading={isLoading}>
            <Helmet>
                <body className="no-scroll" />
            </Helmet>
            {isMounted && !isHidden && (
                <div className="loader">
                    <div className="pour-container">
                        <div className="pour"></div>
                    </div>
                    <div className="cup-container">
                        <Lid className="lid" />
                        <Cup className="cup" />
                        <Chris className="chris" />
                    </div>
                    <div className="loading">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
            )}
            <div className="rect rect-1"></div>
            <div className="rect rect-2"></div>
            <div className="rect rect-3"></div>
            <div className="rect rect-4"></div>
        </Wrapper>
    );
};

const loaderHeight = 8;
const cupHeight = (loaderHeight * 4) / 5;
const lidHeight = (loaderHeight * 1) / 5;
const chrisHeight = (loaderHeight * 3) / 16;
const pourHeight = loaderHeight * 1;
const pourWidth = pourHeight / 16;

const chrisDuration = 0.5;
const pourDuration = 1.5;
const lidDuration = pourDuration * 1.25;
const totalDuration = chrisDuration + lidDuration;
const closeDuration = 0.6;
const animationDelay = 0.3;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; //${props => (props.isLoading ? "100vh" : "0")};
    width: 100%;
    background: ${props => props.theme.color.backgroundLight};
    z-index: 99;
    transform: ${props => (props.isLoading ? "translateY(0%)" : "translateY(-100%)")};
    transition: all ${closeDuration}s ease;

    .loader {
        position: absolute;
        width: 50rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: visible;

        @keyframes loading {
            0% {
                filter: blur(0);
                opacity: 1;
            }
            100% {
                opacity: 0.4;
            }
        }

        .loading {
            text-align: center;
            font-size: 1.75rem;

            span:nth-child(1) {
                animation-delay: ${animationDelay * 1}s;
            }
            span:nth-child(2) {
                animation-delay: ${animationDelay * 2}s;
            }
            span:nth-child(3) {
                animation-delay: ${animationDelay * 3}s;
            }
            span:nth-child(4) {
                animation-delay: ${animationDelay * 4}s;
            }
            span:nth-child(5) {
                animation-delay: ${animationDelay * 5}s;
            }
            span:nth-child(6) {
                animation-delay: ${animationDelay * 6}s;
            }
            span:nth-child(7) {
                animation-delay: ${animationDelay * 7}s;
            }
            span:nth-child(8) {
                animation-delay: ${animationDelay * 8}s;
            }
            span:nth-child(9) {
                animation-delay: ${animationDelay * 9}s;
            }
            span:nth-child(10) {
                animation-delay: ${animationDelay * 10}s;
            }

            span {
                display: inline-block;
                transform-origin: 50% 50% 8px;
                transform-style: preserve-3d;
                animation: loading 0.9s infinite;
            }
        }

        .cup-container {
            height: ${loaderHeight}rem;
            position: relative;
            transform: translateY(${-lidHeight}rem);
        }

        .lid {
            height: ${lidHeight}rem;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%);
            animation-name: lid;
            animation-duration: ${lidDuration}s;
            animation-delay: ${chrisDuration}s;
        }

        @keyframes lid {
            0% {
                transform: translate(-50%);
            }

            20% {
                transform: translate(-125%, -200%) rotate(-60deg);
            }

            80% {
                transform: translate(-125%, -200%) rotate(-60deg);
            }

            100% {
                transform: translate(-50%);
            }
        }

        .cup {
            position: absolute;
            top: ${lidHeight - lidHeight / 8}rem;
            left: 50%;
            transform: translate(-50%);
            height: ${cupHeight}rem;
        }
        .chris {
            height: ${chrisHeight}rem;
            position: absolute;
            left: 50%;
            top: ${cupHeight * 0.4 + lidHeight}rem;
            transform: translate(-50%, -50%);
            opacity: 1;

            animation-name: chris;
            animation-duration: ${chrisDuration}s;
            animation-delay: 0;
        }

        @keyframes chris {
            from {
                opacity: 0;
                bottom: 0;
                transform: translate(100%, 150%) rotate(30deg);
            }

            to {
                bottom: ${cupHeight / 3}rem;
                transform: translate(-50%, -50%);
                opacity: 1;
            }
        }

        .pour-container {
            height: ${pourHeight}rem;
            overflow: hidden;
        }

        .pour {
            height: ${pourHeight}rem;
            width: ${pourWidth}rem;
            background-color: #6f4e37;
            margin-left: 50%;
            margin-right: 50%;
            transform: translate(-50%, 100%);
            animation-name: pour;
            animation-duration: ${pourDuration}s;
            animation-delay: ${chrisDuration + (lidDuration - pourDuration) / 2}s;
            z-index: -1;
            animation-fill-mode: forwards;
        }

        @keyframes pour {
            0% {
                opacity: 1;
                border-radius: 0 0 ${pourHeight / 12}rem ${pourHeight / 12}rem;
                background-color: #6f4e37;
                transform: translate(-50%, calc(-100%));
            }

            25% {
                transform: translate(-50%, calc(0%));
                background-color: #6f4e37;
            }

            75% {
                border-radius: ${pourHeight / 12}rem ${pourHeight / 12}rem 0 0;
                transform: translate(-50%, calc(0%));
            }

            100% {
                display: none;
                background-color: #e5a04c;
                transform: translate(-50%, 100%);
            }
        }
    }

    .rect {
        position: absolute;
        top: 0;
        height: 1rem;
    }

    .rect-1 {
        top: calc(15% - 1rem);
        left: 0;
        width: 6rem;
        background-color: ${props => props.theme.color.primary};
    }
    .rect-2 {
        top: calc(15% - 1rem + 1rem);
        left: 0;
        width: 2rem;
        background-color: ${props => props.theme.color.secondary};
    }
    .rect-3 {
        top: calc(85% - 1rem + 1rem);
        right: 0;
        width: 6rem;
        background-color: ${props => props.theme.color.primary};
    }
    .rect-4 {
        top: calc(85% - 1rem);
        right: 0;
        width: 2rem;
        background-color: ${props => props.theme.color.secondary};
    }
`;

export default Loader;
