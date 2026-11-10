import React from "react";

// The mono strip that opens every section: index + title on the left, a note on the right.
const SectionHeader = ({ index, title, note }) => (
    <div className="label flex justify-between gap-4 border-t border-paper pb-10 pt-3.5 text-muted">
        <h2 className="font-normal">
            <span className="text-paper">{index}</span>
            <span aria-hidden="true">{"  "}</span>
            {title}
        </h2>
        {note && <span className="hidden sm:inline">{note}</span>}
    </div>
);

export default SectionHeader;
