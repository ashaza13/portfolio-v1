import React, { memo } from "react";
import { PIPELINES } from "../data";

// Small deterministic PRNG so the layout is identical on every load and render.
const seeded = (seed) => () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
};

const buildLanes = () => {
    const rnd = seeded(7);
    return Array.from({ length: PIPELINES }, (_, r) => {
        const crossing = 9 + rnd() * 7; // seconds to cross; each lane has its own pace
        const count = 5 + Math.floor(rnd() * 4);
        return {
            label: `P${String(r + 1).padStart(2, "0")}`,
            points: Array.from({ length: count }, (_, k) => {
                const dur = crossing * (0.92 + rnd() * 0.16);
                const roll = rnd();
                return {
                    dur: `${dur.toFixed(2)}s`,
                    // Negative delays start every point mid-journey, so the field is full on first paint.
                    delay: `${(-(k / count) * dur - rnd() * 1.5).toFixed(2)}s`,
                    kind: roll < 0.08 ? "is-insight" : roll < 0.55 ? "is-agg" : "",
                };
            }),
        };
    });
};

const LANES = buildLanes();

const LaneRow = ({ label, children }) => (
    <div className="grid grid-cols-[30px_1fr] items-center gap-x-2 sm:grid-cols-[44px_1fr] sm:gap-x-3">
        <span className="label text-muted">{label}</span>
        {children}
    </div>
);

/*
 * Ten lanes, one per pipeline. Gray points are raw rows; at the Beam / Dataflow gate about
 * half are aggregated away, the rest continue off-white, and a few turn orange: an insight
 * delivered. Pure CSS animation (see index.css), so it never re-renders.
 */
const FlowField = () => (
    <figure
        role="img"
        aria-label="Animation: ten pipelines stream raw rows through Apache Beam on Dataflow, where they are aggregated into insights such as alerts, leaderboards and ramp-up curves."
        className="flex flex-col gap-3"
    >
        <LaneRow label="">
            <div className="label grid grid-cols-[1fr_auto_1fr] items-end pb-2.5 text-muted" aria-hidden="true">
                <span>Raw rows →</span>
                <span className="text-center text-paper">Beam / Dataflow</span>
                <span className="text-right">
                    → <span className="text-paper">Insights</span>
                </span>
            </div>
        </LaneRow>

        <div className="relative flex flex-col gap-3" aria-hidden="true">
            {LANES.map((lane) => (
                <LaneRow key={lane.label} label={lane.label}>
                    <div className="relative h-3.5 overflow-x-clip before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-hair">
                        {lane.points.map((p, i) => (
                            <span
                                key={i}
                                className={`flow-track ${p.kind}`}
                                style={{ "--dur": p.dur, "--delay": p.delay }}
                            >
                                <span className="flow-dot" />
                            </span>
                        ))}
                    </div>
                </LaneRow>
            ))}

            {/* The gate, centred over the lanes (offset = label column + gap). */}
            <div className="pointer-events-none absolute inset-y-0 left-[38px] right-0 sm:left-[56px]">
                <span className="absolute -bottom-2.5 -top-2.5 left-1/2 w-px bg-paper" />
            </div>
        </div>
    </figure>
);

export default memo(FlowField);
