import React from "react";
import { useNow, easternTime } from "../hooks/useNow";

// Live Eastern-time clock, isolated so its once-a-second render touches nothing else.
const Clock = () => {
    const now = useNow(1000);
    return <time className="text-paper">{easternTime(now).label}</time>;
};

export default Clock;
