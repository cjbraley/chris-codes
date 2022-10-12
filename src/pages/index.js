import * as React from "react";

import SEO from "../components/seo/SEO";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Contact from "../components/Contact";

const IndexPage = () => {
    return (
        <main>
            <SEO />
            <Hero />
            <Projects />
            <Technologies />
            <About />
            <Contact />
        </main>
    );
};

export default IndexPage;
