import React from "react";

// Filled in at build time (see the build script in package.json); hidden when unavailable.
const COMMIT = (process.env.REACT_APP_COMMIT || "").slice(0, 7);
const BUILT = process.env.REACT_APP_BUILT_AT || "";

const Footer = () => (
    <footer className="border-t border-line">
        <div className="container-page label flex flex-wrap justify-between gap-3 py-5 text-muted">
            <span>
                {COMMIT ? (
                    <>
                        Build{" "}
                        <a
                            href={`https://github.com/ashaza13/portfolio-v1/commit/${COMMIT}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {COMMIT}
                        </a>
                        {BUILT && ` · deployed ${BUILT}`}
                    </>
                ) : (
                    <a href="https://github.com/ashaza13/portfolio-v1" target="_blank" rel="noopener noreferrer">
                        Source ↗
                    </a>
                )}
            </span>
            <span className="hidden sm:inline">Set in Schibsted Grotesk + JetBrains Mono</span>
            <span>© {new Date().getFullYear()} Ashaz Ahmed</span>
        </div>
    </footer>
);

export default Footer;
