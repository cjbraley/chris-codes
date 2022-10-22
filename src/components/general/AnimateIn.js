import React from "react";
import { useInView } from "react-intersection-observer";

const threshold = 0;
const distance = 30;
const triggerOnce = true;
const duration = 225;
const delay = 150;

const AnimateIn = ({ children }) => {
    const [ref, inView] = useInView({ threshold, triggerOnce });

    const styles = {
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : distance}px)`,
    };

    return children.length > 1 ? (
        <div ref={ref}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { style: styles });
                }
            })}
        </div>
    ) : (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { ref, style: styles });
                }
            })}
        </>
    );
};

export default AnimateIn;
