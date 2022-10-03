import React from "react";
import styled from "styled-components";

import LogoIcon from "../../assets/icons/coffee-logo.svg";

const Logo = ({ alt = false }) => {
    return (
        <Wrapper>
            <LogoIcon className={`logo ${alt ? "logo--alt" : ""}`} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 4.5rem;
    .logo {
        height: 4.5rem;
        margin-right: ${props => props.theme.spacing.xl};
        fill: ${props => props.theme.color.fontDark};
    }

    .logo--alt {
        fill: ${props => props.theme.color.fontLight};
    }
`;

export default Logo;
