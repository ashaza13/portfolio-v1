import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ index, eyebrow, title, description }) => (
    <Reveal className="mb-12 sm:mb-16 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="text-zinc-500">{index}</span>
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
            {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-white leading-[1.1]">
            {title}
        </h2>
        {description && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400">{description}</p>
        )}
    </Reveal>
);

export default SectionHeading;
