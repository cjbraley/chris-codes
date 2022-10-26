import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "gatsby";

import Menu from "./Menu";
import Logo from "./Logo";

import { useWindowSize } from "../../use/useWindowSize";
import { useScrollDirection } from "../../use/useScrollDirection";

import { navItems } from "../../data/config";

const Navbar = () => {
    const { width } = useWindowSize();
    const theme = useTheme();

    // menu state - needed because affects scrolling
    const [showMenu, setShowMenu] = useState(false);

    // detect upward scroll
    const scrollDirection = useScrollDirection();

    const [scrolledPastNav, setScrolledPastNav] = useState(false);

    useEffect(() => {
        // don't hide nav if haven't scrolled past its height
        const handleScroll = () => {
            const navPixels = theme.position.navHeight.replace("rem", "") * 16;
            setScrolledPastNav(window.pageYOffset > navPixels);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [theme]);

    return (
        <>
            <Nav
                id="nav"
                scrollDirection={scrollDirection}
                scrolledPastNav={scrolledPastNav}
                showMenu={showMenu}
            >
                <div className="content">
                    <div className="navbar-menu">
                        {width < theme.breakpoint.tablet && (
                            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
                        )}
                        {width >= theme.breakpoint.tablet && (
                            <div className="navbar-links">
                                {navItems.map(item => (
                                    <Link
                                        key={item.name}
                                        className="navbar-item text--link"
                                        to={item.to}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <div className="navbar-logo">
                            {/* {width >= theme.breakpoint.desktop && (
                            <a href={ResumeFile} download>
                                <Button transparent>Resume</Button>
                            </a>
                        )} */}
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                </div>
            </Nav>
            <NavOffset />
        </>
    );
};

export default Navbar;

const Nav = styled.nav`
    width: 100%;
    background: ${props => props.theme.color.primaryBackground};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    transition: all 0.5s ease;
    transform: ${props =>
        props.scrollDirection === "down" && props.scrolledPastNav && !props.showMenu
            ? "translateY(-100%)"
            : "translateY(0%)"};

    .scroll {
        transform: translateY(-8.75rem);
        transition: all 0.75s ease;
    }

    .content {
        width: 100%;
        max-width: none;
    }

    .navbar-menu {
        height: ${props => props.theme.position.navHeight};
        width: 100%;
        padding-top: ${props => props.theme.spacing.s};
        padding-bottom: 0;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dedede;

        .navbar-links {
            .navbar-item {
                margin-left: ${props => props.theme.spacing.m};

                &:hover {
                    border-bottom: 2px solid ${props => props.theme.color.fontDark};
                }
            }
        }

        .navbar-links {
            order: 2;
        }

        .navbar-logo {
            order: 1;
        }
    }

    /* @media (min-width: ${props => props.theme.breakpoint.tablet}px) {

    } */

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .content {
            max-width: 1200px;
        }

        .navbar-menu {
            .navbar-links {
                .navbar-item {
                    margin-left: ${props => props.theme.spacing.l};
                }
            }
        }
    }
`;

const NavOffset = styled.div`
    height: ${props => props.theme.position.navHeight};
    background: ${props => props.theme.color.primaryBackground};
`;
