import React from "react";
import styled from "styled-components";

const Button = ({ children, color = "primary", transparent = false, onClick }) => {
    return (
        <StyledButton
            color={color}
            transparent={transparent}
            className="button-text"
            onClick={onClick}
        >
            <span className="text--button">{children}</span>
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.xs};
    border-radius: 0.25rem;
    display: flex; // to get correct line height

    &.disabled {
        opacity: 0.8;
        a {
            pointer-events: none;
        }
    }

    ${props => `background-color: ${props.theme.color[props.color]};}`};

    // background
    ${props => {
        const color = `${props.color}${props.transparent ? "Background" : ""}`;
        return `background-color: ${props.theme.color[color]};}`;
    }}

    // text + border
    ${props => {
        const color = `${props.transparent ? props.color : "fontLight"}`;
        return `color: ${props.theme.color[color]};border: 1px solid ${props.theme.color[color]};}`;
    }}

    @media (hover: hover) and (pointer: fine) {
        &:hover {


            // background
            ${props => {
                if (props.transparent) return;
                const color = `${props.color}Dark`;
                return `background-color: ${props.theme.color[color]};}`;
            }}
            // text + border
            ${props => {
                if (!props.transparent) return;
                const color = `${props.color}Dark`;
                return `color: ${props.theme.color[color]};border-color: ${props.theme.color[color]};}`;
            }}
    }
`;
