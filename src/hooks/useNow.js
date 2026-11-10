import { useEffect, useState } from "react";

// Re-renders the calling component every `intervalMs` with the current timestamp.
export const useNow = (intervalMs) => {
    const [now, setNow] = useState(() => Date.now());
    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), intervalMs);
        return () => clearInterval(id);
    }, [intervalMs]);
    return now;
};

const etFormat = (() => {
    try {
        return new Intl.DateTimeFormat("en-US", {
            timeZone: "America/New_York",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h23",
        });
    } catch {
        return null;
    }
})();

// Wall-clock time in US Eastern (where Takt is), with seconds since local midnight.
export const easternTime = (timestamp) => {
    const date = new Date(timestamp);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (etFormat) {
        const parts = etFormat.formatToParts(date);
        const get = (type) => Number(parts.find((p) => p.type === type)?.value ?? 0);
        h = get("hour") % 24;
        m = get("minute");
        s = get("second");
    }
    const pad = (n) => String(n).padStart(2, "0");
    return {
        label: `${pad(h)}:${pad(m)}:${pad(s)}`,
        secondsToday: h * 3600 + m * 60 + s + date.getMilliseconds() / 1000,
    };
};
