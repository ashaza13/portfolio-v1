import React from "react";
import SectionHeader from "../components/SectionHeader";
import { record } from "../data";

const cols = "grid grid-cols-[64px_1fr] gap-x-6 gap-y-1.5 md:grid-cols-[72px_72px_3fr_3fr_2fr_4fr]";

// Experience as a timetable: from, to, organisation, role, where, note.
const Record = () => (
    <section id="record" className="container-page pb-28">
        <SectionHeader index="02" title="Record" note="2022 — now" />
        <div className={`label hidden border-b border-line pb-3 text-muted md:grid ${cols}`} aria-hidden="true">
            <span>From</span>
            <span>To</span>
            <span>Organisation</span>
            <span>Role</span>
            <span>Where</span>
            <span>Note</span>
        </div>
        <ol>
            {record.map((r) => (
                <li key={r.org} className={`row-hover items-baseline border-b border-hair py-[22px] ${cols}`}>
                    <span className="font-mono text-sm">
                        {r.from}
                        <span className="md:hidden">
                            {" — "}
                            <span className={r.to ? undefined : "text-accent"}>{r.to ?? "now"}</span>
                        </span>
                    </span>
                    <span className={`hidden font-mono text-sm uppercase md:block ${r.to ? "" : "text-accent"}`}>
                        {r.to ?? "Now"}
                    </span>
                    <div className="md:contents">
                        <h3 className="text-[22px] font-medium tracking-[-0.02em]">{r.org}</h3>
                        <span className="block text-[15px] text-body">{r.role}</span>
                        <span className="hidden text-[15px] text-muted md:block">{r.where}</span>
                        <span className="mt-1 block text-[15px] leading-normal text-body md:mt-0">{r.note}</span>
                    </div>
                </li>
            ))}
        </ol>
    </section>
);

export default Record;
