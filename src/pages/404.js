import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Seo from "../components/seo/Seo";
import Button from "../components/general/Button";

const NotFoundPage = () => {
    return (
        <Wrapper className="page-section">
            <Seo title="Page Not Found" description="This page doesn't exist." />
            <div className="anchor" id="contact"></div>
            <div className="content">
                <div className="page-section__header">
                    <h1 className="error">404</h1>
                    <h2 className="page-section__header__title">Page Not Found</h2>
                    <div className="text--large page-section__header__subtitle">
                        Looks like we couldn't find what you were looking for.
                    </div>
                </div>
                <Link className="btn" to="/">
                    <Button color="primary" transparent>
                        HOME PAGE
                    </Button>
                </Link>
            </div>
            <div className="rect rect-1" />
            <div className="rect rect-2" />
            <div className="rect rect-3" />
            <div className="rect rect-4" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xxl};
    min-height: calc(
        100vh - ${props => props.theme.position.navHeight} -
            ${props => props.theme.position.footerHeight}
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    position: relative;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .error {
        font-size: 4rem;
    }

    .rect {
        position: absolute;
        top: 0;
        height: 1rem;
    }

    .rect-1 {
        top: calc(15% - 2rem);
        left: 0;
        width: 6rem;
        background-color: ${props => props.theme.color.primary};
    }
    .rect-2 {
        top: calc(15% - 2rem + 1rem);
        left: 0;
        width: 2rem;
        background-color: ${props => props.theme.color.secondary};
    }
    .rect-3 {
        top: calc(85% + 1rem);
        right: 0;
        width: 6rem;
        background-color: ${props => props.theme.color.primary};
    }
    .rect-4 {
        top: calc(85%);
        right: 0;
        width: 2rem;
        background-color: ${props => props.theme.color.secondary};
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .content {
            max-width: 32rem;
        }
        .error {
            font-size: 6rem;
        }

        .rect-1 {
            width: 9rem;
        }
        .rect-2 {
            width: 3rem;
        }
        .rect-3 {
            width: 9rem;
        }
        .rect-4 {
            width: 3rem;
        }
    }
`;

export default NotFoundPage;
