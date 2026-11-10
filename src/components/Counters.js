import React from "react";
import { useNow, easternTime } from "../hooks/useNow";
import { PIPELINES, ROWS_PER_PIPELINE_PER_DAY } from "../data";

const PER_SECOND = ROWS_PER_PIPELINE_PER_DAY / 86400; // ~1,157 rows/s for one pipeline

const Figure = ({ label, children, className = "" }) => (
    <div className={`col-span-2 flex flex-col gap-1.5 md:col-span-3 ${className}`}>
        <span className="label flex items-center gap-2 text-muted">{label}</span>
        <span className="font-mono text-xl tracking-[-0.02em] tabular-nums sm:text-[28px]">{children}</span>
    </div>
);

// Estimated rows since midnight ET. Pipeline 01 steps by 100s (~11 times a second).
const Counters = () => {
    const now = useNow(60);
    const { secondsToday } = easternTime(now);
    const one = Math.floor((secondsToday * PER_SECOND) / 100) * 100;
    const all = Math.floor((secondsToday * PER_SECOND * PIPELINES) / 1e6);

    return (
        <div className="grid-12 mt-12 gap-y-5 border-t border-line pt-5">
            <Figure
                label={
                    <>
                        <span className="blink h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        Pipeline 01, today
                    </>
                }
            >
                {one.toLocaleString("en-US")}
            </Figure>
            <Figure label="All ten, today" className="text-body">
                ≈ {all}M
            </Figure>
            <Figure label="Rate, each" className="hidden text-body md:flex">
                ~{Math.round(PER_SECOND).toLocaleString("en-US")} / s
            </Figure>
            <Figure label="Day elapsed" className="hidden text-body md:flex">
                {Math.floor(secondsToday / 864)}%
            </Figure>
        </div>
    );
};

export default Counters;
