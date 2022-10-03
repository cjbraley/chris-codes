import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Button from "../general/Button";
import Logo from "./Logo";

import ResumeFile from "../../assets/files/CV-Gov-Christopher-Braley-2022.pdf";

const Navbar = () => {
    return (
        <Nav id="nav">
            <div className="content">
                <div className="navbar-menu">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <div className="navbar-start">
                        <Link className="navbar-item text--link" to="/">
                            Home
                        </Link>
                        <Link className="navbar-item text--link" to="/#projects">
                            Projects
                        </Link>
                        <Link className="navbar-item text--link" to="/#technologies">
                            Technologies
                        </Link>
                        <Link className="navbar-item text--link" to="/#about">
                            About
                        </Link>
                        <Link className="navbar-item text--link" to="/contact">
                            Contact
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <a href={ResumeFile} download>
                            <Button transparent>Resume</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    width: 100%;
    background: ${props => props.theme.color.primaryBackground};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    .scroll {
        transform: translateY(-8.75rem);
        transition: all 0.75s ease;
    }

    .content {
        width: 100%;
    }

    .navbar-menu {
        height: ${props => props.theme.position.navHeight};
        padding-top: ${props => props.theme.spacing.s};
        padding-bottom: 0;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        align-items: center;
        border-bottom: 1px solid #dedede};
    }

    .navbar-start {
        justify-content: flex-start;
        margin-right: auto;
    }

    .navbar-end {
        justify-content: flex-end;
        margin-left: auto;
    }

    .navbar-item {
        margin-right: ${props => props.theme.spacing.xl};

        &:hover {
            border-bottom: 2px solid ${props => props.theme.color.fontDark};
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    }
`;
