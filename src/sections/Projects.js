import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data";

const Preview = ({ project }) => {
    const [failed, setFailed] = useState({});
    const showImage = project.image && !failed[project.name];
    return (
        <div className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
            {showImage ? (
                <img
                    key={project.name}
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    onError={() => setFailed((f) => ({ ...f, [project.name]: true }))}
                    className="fade-in h-full w-full object-cover object-top"
                />
            ) : (
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-semibold tracking-[-0.05em]">
                    {project.name}
                </span>
            )}
        </div>
    );
};

const Links = ({ project }) => (
    <span className="label flex gap-5">
        {project.externalURL && (
            <a href={project.externalURL} target="_blank" rel="noopener noreferrer">
                Visit ↗
            </a>
        )}
        {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                Code ↗
            </a>
        )}
    </span>
);

// A numbered index; hovering or focusing a row swaps the preview pane.
const Projects = () => {
    const [active, setActive] = useState(0);
    const current = projects[active];

    return (
        <section id="work" className="container-page pb-28">
            <SectionHeader index="03" title="Work" note="Hover a row" />
            <div className="grid-12 items-start gap-y-8">
                <ol className="col-span-full border-t border-line md:col-span-7">
                    {projects.map((p, i) => {
                        const on = i === active;
                        return (
                            <li key={p.name} className="border-b border-hair">
                                <button
                                    type="button"
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    onClick={() => setActive(i)}
                                    aria-expanded={on}
                                    className={`grid w-full grid-cols-[40px_1fr_auto_24px] items-baseline gap-4 py-5 text-left transition-colors duration-500 ease-swiss ${
                                        on ? "text-paper" : "text-muted hover:text-paper"
                                    }`}
                                >
                                    <span className="font-mono text-[13px]">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-2xl font-medium tracking-[-0.03em] lg:text-[38px]">
                                        {p.name}
                                    </span>
                                    <span className="font-mono text-[13px]">{p.duration.replace("Present", "")}</span>
                                    <span
                                        aria-hidden="true"
                                        className={`text-lg text-accent transition-all duration-500 ease-swiss ${
                                            on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                                        }`}
                                    >
                                        →
                                    </span>
                                </button>
                                {/* On phones the details open under the row instead of in a side pane. */}
                                {on && (
                                    <div className="fade-in flex flex-col gap-3 pb-6 pl-14 md:hidden">
                                        <p className="text-[15px] leading-relaxed text-body">{p.description}</p>
                                        <p className="label text-muted">{p.technologies.join(" · ")}</p>
                                        <Links project={p} />
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ol>

                <div className="sticky top-[76px] hidden flex-col gap-4 md:col-span-5 md:flex">
                    <Preview project={current} />
                    <p className="leading-relaxed text-body">{current.description}</p>
                    <p className="label text-muted">{current.technologies.join(" · ")}</p>
                    <Links project={current} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
