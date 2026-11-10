import React from "react";
import FlowField from "../components/FlowField";
import InsightFeed from "../components/InsightFeed";
import Counters from "../components/Counters";

const now = [
    { label: "Now", value: "Takt, 2025 —" },
    { label: "Before", value: "Accenture Federal, GDIT" },
    { label: "School", value: "Virginia Tech, CS" },
];

const Hero = () => (
    <section id="top" className="container-page pt-10 sm:pt-14">
        <div className="label flex justify-between gap-4 text-muted">
            <span>Rows in, insights out · 10 pipelines</span>
            <span className="hidden lg:inline">
                Gray = raw rows · white = aggregated · orange = an insight delivered
            </span>
        </div>

        <div className="mt-10">
            <FlowField />
            <div className="mt-3 grid grid-cols-[30px_1fr] gap-x-2 pt-2.5 sm:grid-cols-[44px_1fr] sm:gap-x-3">
                <span />
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6">
                    <span className="hidden sm:block" />
                    <InsightFeed />
                </div>
            </div>
        </div>

        <Counters />
        <p className="label mt-3 normal-case text-muted">
            Estimates since 00:00 ET from typical volume. The insights above are examples, not live data.
        </p>

        <div className="grid-12 items-start gap-y-10 pb-24 pt-16 sm:pt-[72px]">
            <dl className="label col-span-full grid grid-cols-3 gap-4 text-muted md:col-span-3 md:grid-cols-1 md:gap-3.5">
                {now.map((item) => (
                    <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd className="mt-1 text-paper">{item.value}</dd>
                    </div>
                ))}
            </dl>
            <h1 className="col-span-full max-w-[20em] text-[1.75rem] font-medium leading-[1.1] tracking-[-0.025em] md:col-span-9 lg:text-[3rem]">
                I'm Ashaz Ahmed. I turn raw data into insights people act on — at Takt, about a billion rows a
                day, in real time.{" "}
                <span className="text-muted">
                    Alerts, leaderboards and ramp-up curves, built on streaming pipelines in Python and services in
                    Go.
                </span>
            </h1>
        </div>
    </section>
);

export default Hero;
