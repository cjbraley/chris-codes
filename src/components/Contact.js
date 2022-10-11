import React from "react";
import styled from "styled-components";

import Button from "./general/Button";

const Contact = () => {
    return (
        <Wrapper className="page-section">
            <div className="anchor" id="contact"></div>
            <div className="content">
                <div className="page-section__header">
                    <h2 className="page-section__header__title">Contact</h2>
                    <div className="text--large page-section__header__subtitle">Say hi</div>
                </div>
                <p className="description">
                    Whether you’d like to discuss any opportunities or just have a question, please
                    feel free to reach out. I will get back to you as soon as possible.
                </p>
                <a
                    className="btn"
                    href="mailto:cbraley@protonmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button color="tertiary" transparent>
                        Get in Touch
                    </Button>
                </a>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    padding-bottom: ${props => props.theme.spacing.xxl};

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .description {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${props => props.theme.spacing.l};
        text-align: center;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {
        .description {
            max-width: 38rem;
        }
    }
`;

export default Contact;
