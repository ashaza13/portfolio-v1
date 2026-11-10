import React from "react";
import SectionHeader from "../components/SectionHeader";
import { stack } from "../data";

const Stack = () => (
    <section id="stack" className="container-page pb-28">
        <SectionHeader index="04" title="Stack" note="Daily drivers first" />
        <dl>
            {stack.map((row) => (
                <div
                    key={row.label}
                    className="grid grid-cols-1 items-baseline gap-x-6 gap-y-1.5 border-b border-hair py-3 sm:grid-cols-[220px_1fr]"
                >
                    <dt className="label text-muted">{row.label}</dt>
                    <dd className="text-[17px]">{row.value}</dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Stack;
