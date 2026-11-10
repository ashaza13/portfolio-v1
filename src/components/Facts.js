import React from "react";
import Reveal from "./Reveal";
import { facts } from "../data";

// Left padding per cell so the first figure in each row sits on the grid edge
// (2 per row on phones, 4 per row on large screens).
const padFor = (i) => {
    const phone = i % 2 === 0 ? "pl-0" : "pl-4";
    const desktop = i === 0 ? "lg:pl-0" : "lg:pl-6";
    return `${phone} ${desktop}`;
};

// A row of headline figures between two full-width rules, divided by 1px hairlines.
const Facts = () => (
    <section aria-label="At a glance" className="border-y border-paper">
        <div className="container-page">
            <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
                {facts.map((fact, i) => (
                    <Reveal key={fact.label} delay={i * 0.06} className={`bg-ink py-7 pr-4 ${padFor(i)}`}>
                        <dt className="text-xs uppercase tracking-[0.04em] text-muted">{fact.label}</dt>
                        <dd className="mt-2.5 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-[2.75rem]">
                            {fact.value}
                        </dd>
                    </Reveal>
                ))}
            </dl>
        </div>
    </section>
);

export default Facts;
