import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Layout = ({ children }) => {
    return (
        <Main>
            <Navbar />
            {children}
            <Footer />
        </Main>
    );
};

export default Layout;

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;
