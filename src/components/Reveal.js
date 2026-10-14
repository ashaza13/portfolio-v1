import React from "react";
import { motion } from "framer-motion";

// Fades content up into place the first time it scrolls into view.
const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
    const Component = motion[as];
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </Component>
    );
};

export default Reveal;
