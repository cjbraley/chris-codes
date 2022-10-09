import { useEffect, useState } from "react";

export const scrollDirection = {
    up: "up",
    down: "down",
};

export const useScrollDirection = () => {
    const threshold = 5;
    const [scrollDir, setScrollDir] = useState(scrollDirection.up);

    useEffect(() => {
        let previousScrollYPosition = window.scrollY;

        const scrolledMoreThanThreshold = currentScrollYPosition =>
            Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

        const isScrollingUp = currentScrollYPosition =>
            currentScrollYPosition > previousScrollYPosition &&
            !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
            !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

        const updateScrollDirection = () => {
            const currentScrollYPosition = window.scrollY;

            if (scrolledMoreThanThreshold(currentScrollYPosition)) {
                const newScrollDirection = isScrollingUp(currentScrollYPosition)
                    ? scrollDirection.down
                    : scrollDirection.up;
                setScrollDir(newScrollDirection);
                previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
            }
        };

        const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrollDir;
};
