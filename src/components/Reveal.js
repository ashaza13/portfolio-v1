import React from "react";
import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

// Fades content up into place the first time it scrolls into view.
const Reveal = ({ children, delay = 0, className = "", as = "div", ...rest }) => {
    const Component = motion[as];
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default Reveal;
