import React from "react";
import SectionHeader from "../components/SectionHeader";
import { systems } from "../data";

const cols = "grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-[3fr_2fr_3fr_3fr]";

const Systems = () => (
    <section id="systems" className="container-page pb-28">
        <SectionHeader index="01" title="From rows to insight, at Takt" note="4 systems · GCP" />
        <div className={`label hidden border-b border-line pb-3 text-muted sm:grid ${cols}`} aria-hidden="true">
            <span>System</span>
            <span>Language</span>
            <span>Runs on</span>
            <span>The insight it delivers</span>
        </div>
        <ul>
            {systems.map((s) => (
                <li key={s.name} className={`row-hover items-baseline border-b border-hair py-[22px] ${cols}`}>
                    <h3 className="text-2xl font-medium tracking-[-0.02em]">{s.name}</h3>
                    <span className="text-[15px] text-body">
                        <span className="sr-only">Language: </span>
                        {s.language}
                    </span>
                    <span className="text-[15px] text-body">
                        <span className="sr-only">Runs on: </span>
                        {s.runsOn}
                    </span>
                    <span className="font-mono text-sm leading-relaxed">{s.insight}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Systems;
