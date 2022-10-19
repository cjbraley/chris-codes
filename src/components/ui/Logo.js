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
    .logo {
        height: 3.25rem;
        fill: ${props => props.theme.color.fontDark};
        stroke: ${props => props.theme.color.fontDark};
    }

    .logo--alt {
        fill: ${props => props.theme.color.fontLight};
        stroke: ${props => props.theme.color.fontLight};
    }
`;

export default Logo;
