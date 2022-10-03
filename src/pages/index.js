import * as React from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import About from "../components/About";

const IndexPage = () => {
    return (
        <main>
            <Hero />
            <Projects />
            <Technologies />
            <About />
        </main>
    );
};

export default IndexPage;
