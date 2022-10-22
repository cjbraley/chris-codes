import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import styled, { useTheme } from "styled-components";
import { navItems } from "../../data/config";
import { useOnClickOutside } from "../../use/useOnClickOutside";

import Footer from "./Footer";

const Menu = ({ showMenu, setShowMenu }) => {
    const theme = useTheme();

    useEffect(() => {
        // close when not in mobile
        const onResize = e => {
            if (e.currentTarget.innerWidth > theme.breakpoint.desktop) {
                setShowMenu(false);
            }
        };
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [theme, setShowMenu]);

    // close when click outside
    const wrapperRef = useRef();
    useOnClickOutside(wrapperRef, () => setShowMenu(false));

    return (
        <Wrapper showMenu={showMenu}>
            <Helmet>
                <body className={showMenu ? "no-scroll" : ""} />
            </Helmet>
            <div className={`overlay ${showMenu ? "" : "overlay--hidden"}`}></div>
            <div ref={wrapperRef}>
                <div
                    className="ham-box"
                    onClick={() => setShowMenu(!showMenu)}
                    onKeyDown={() => setShowMenu(!showMenu)}
                    showMenu={showMenu}
                    aria-label="Menu"
                    role="button"
                    tabIndex={showMenu ? 0 : -1}
                >
                    <div className="ham-box-inner" />
                </div>

                <div className="menu" aria-hidden={!showMenu}>
                    <div className="content">
                        <div className="rect rect-1"></div>
                        <div className="rect rect-2"></div>

                        <nav>
                            {navItems && (
                                <ol>
                                    {navItems.map(({ name, to }, i) => (
                                        <li key={i}>
                                            <Link
                                                to={to}
                                                onClick={() => setShowMenu(false)}
                                                className="navbar-item"
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </nav>
                        <div className="rect rect-3"></div>
                        <div className="rect rect-4"></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .ham-box {
        display: inline-block;
        position: relative;
        width: 2rem;
        height: 24px;
        z-index: 4;
    }

    .ham-box-inner {
        position: absolute;
        top: 50%;
        left: 0;
        width: 2rem;
        height: 2px;
        border-radius: 2px;
        background-color: ${props => props.theme.color.fontDark};
        transition-duration: 0.22s;
        transition-property: transform;
        transition-delay: ${props => (props.showMenu ? `0.12s` : `0s`)};
        transform: rotate(${props => (props.showMenu ? `225deg` : `0deg`)});
        transition-timing-function: cubic-bezier(
            ${props => (props.showMenu ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
        );

        &:before,
        &:after {
            content: "";
            display: block;
            position: absolute;
            left: auto;
            left: 0;
            width: 2rem;
            height: 2px;
            border-radius: 4px;
            background-color: ${props => props.theme.color.fontDark};
            transition-timing-function: ease;
            transition-duration: 0.15s;
            transition-property: transform;
        }

        &:before {
            width: ${props => (props.showMenu ? `100%` : `120%`)};
            top: ${props => (props.showMenu ? `0` : `-10px`)};
            opacity: ${props => (props.showMenu ? 0 : 1)};
            transition: ${({ showMenu }) =>
                showMenu ? "var(--ham-before-active)" : "var(--ham-before)"};
        }

        &:after {
            width: ${props => (props.showMenu ? `100%` : `80%`)};
            bottom: ${props => (props.showMenu ? `0` : `-10px`)};
            transform: rotate(${props => (props.showMenu ? `-90deg` : `0`)});
            transition: ${({ showMenu }) =>
                showMenu ? "var(--ham-after-active)" : "var(--ham-after)"};
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        transition: 0.25s all ease;
    }

    .overlay--hidden {
        background-color: initial;
        backdrop-filter: blur(0px);
        pointer-events: none;
    }

    .menu {
        z-index: 3;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: min(100vw, 440px);
        display: flex;
        flex-direction: column;
        /* transform: translateX(-${props => (props.showMenu ? 0 : 75)}vw); */
        transform: translateX(${props => (props.showMenu ? 0 : "min(-100vw, -440px)")});
        transition: all 0.5s ease;

        background-color: ${props => props.theme.color.primaryBackground};
        box-shadow: 4px 0 4px -2px ${props => props.theme.color.fontMedium};

        .navbar-item {
            margin-right: 0;
        }

        /* .header {
            height: ${props => props.theme.position.navHeight};
        } */

        .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;

            .rect {
                position: absolute;
                top: 0;
                height: 1rem;
            }

            .rect-1 {
                top: calc(25% - 1rem);
                left: 0;
                width: 6rem;
                background-color: ${props => props.theme.color.primary};
            }
            .rect-2 {
                top: calc(25% - 1rem + 1rem);
                left: 0;
                width: 2rem;
                background-color: ${props => props.theme.color.secondary};
            }
            .rect-3 {
                top: calc(75% - 1rem + 1rem);
                right: 0;
                width: 6rem;
                background-color: ${props => props.theme.color.primary};
            }
            .rect-4 {
                top: calc(75% - 1rem);
                right: 0;
                width: 2rem;
                background-color: ${props => props.theme.color.secondary};
            }

            nav {
                width: 100%;
                flex-direction: column;
                text-align: center;
                ol {
                    list-style: none;
                    width: 100%;
                    li {
                        position: relative;
                        /* border-bottom: 1px solid black; */
                        padding-top: ${props => props.theme.spacing.s};
                        padding-bottom: ${props => props.theme.spacing.s};
                    }
                }
            }
        }
    }
`;

export default Menu;
