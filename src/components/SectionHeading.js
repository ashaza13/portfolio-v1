import React from "react";
import Reveal from "./Reveal";

// Swiss section header: index + label in the first three columns, headline across the rest.
const SectionHeading = ({ index, label, title, light = false, className = "" }) => (
    <Reveal className={`grid-12 gap-y-6 pb-12 ${className}`}>
        <p className="col-span-full flex flex-col gap-1.5 text-[15px] md:col-span-3">
            <span className="font-display font-semibold">{index}</span>
            <span className={light ? "text-band-muted" : "text-muted"}>{label}</span>
        </p>
        <h2 className="heading-2 col-span-full max-w-[14em] md:col-span-9">{title}</h2>
    </Reveal>
);

export default SectionHeading;
