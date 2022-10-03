import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme/default";
import GlobalStyle from "./src/styles/index";
import Layout from "./src/components/ui/Layout";

import "./src/styles/fonts.css";

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>{element}</Layout>
        </ThemeProvider>
    );
};
