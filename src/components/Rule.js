import React from "react";
import { motion } from "framer-motion";
import { EASE } from "./Reveal";

// A 1px horizontal rule that draws in from the left when it enters the viewport.
const Rule = ({ className = "bg-paper", delay = 0, animateOnMount = false }) => {
    const target = { scaleX: 1 };
    return (
        <motion.div
            aria-hidden="true"
            className={`h-px origin-left ${className}`}
            initial={{ scaleX: 0 }}
            {...(animateOnMount
                ? { animate: target }
                : { whileInView: target, viewport: { once: true, margin: "0px 0px -40px 0px" } })}
            transition={{ duration: 1.4, delay, ease: EASE }}
        />
    );
};

export default Rule;
