import React from "react";
import { insights } from "../data";

// One line at a time, each sliding up for 3.2s. Examples of what the systems produce.
const InsightFeed = () => (
    <div className="relative h-[18px] overflow-hidden" aria-hidden="true">
        {insights.map((item, i) => (
            <span
                key={item.title}
                className="feed-item label absolute inset-0 flex items-center gap-2.5 normal-case sm:uppercase"
                style={{ animationDelay: `${i * 3.2}s` }}
            >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-paper">{item.title}</span>
                <span className="hidden truncate text-muted sm:inline">— {item.detail}</span>
            </span>
        ))}
    </div>
);

export default InsightFeed;
