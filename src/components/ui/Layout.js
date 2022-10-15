import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "./Loader";

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Main>
            {<Loader isLoading={isLoading} setIsLoading={setIsLoading} />}
            <Navbar />
            <div className="children">{children}</div>
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
    position: relative;

    .children {
        flex-grow: 1;
    }
`;
