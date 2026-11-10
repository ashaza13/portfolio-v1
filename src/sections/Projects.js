import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Rule from "../components/Rule";
import { projects } from "../data";

const ProjectImage = ({ project, className = "" }) => {
    const [failed, setFailed] = useState(false);
    const href = project.externalURL || project.link;
    const inner = failed ? (
        <span className="flex h-full w-full items-center justify-center font-display text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            {project.name}
        </span>
    ) : (
        <img
            onError={() => setFailed(true)}
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            className="img-swiss h-full w-full object-cover object-top"
        />
    );
    const box = `block overflow-hidden border border-line bg-surface ${className}`;
    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className={box}>
            {inner}
        </a>
    ) : (
        <div className={box}>{inner}</div>
    );
};

const ProjectLinks = ({ project }) => (
    <span className="flex gap-4 text-[13px] text-muted">
        {project.externalURL && (
            <a
                href={project.externalURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                className="link-draw hover:text-paper"
            >
                Live ↗
            </a>
        )}
        {project.link && (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
                className="link-draw hover:text-paper"
            >
                Code ↗
            </a>
        )}
    </span>
);

const Projects = () => {
    const [featured, ...rest] = projects;

    return (
        <section id="work" className="container-page py-24 sm:py-32">
            <SectionHeading
                index="04"
                label="Selected work"
                title="From production iOS apps to autonomous-driving simulations."
            />

            {/* Featured project */}
            <Rule />
            <Reveal as="article" className="group grid-12 gap-y-6 pt-6">
                <div className="col-span-full flex flex-col gap-2 text-sm md:col-span-3">
                    <span className="font-semibold">Featured</span>
                    <span className="text-muted">{featured.duration}</span>
                    {featured.isAppStore && <span className="text-muted">App Store</span>}
                </div>
                <div className="col-span-full flex flex-col gap-7 md:col-span-9">
                    <ProjectImage project={featured} className="aspect-[16/9]" />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-9 sm:gap-6">
                        <h3 className="font-display text-[2rem] font-semibold tracking-[-0.03em] sm:col-span-4">
                            {featured.name}
                        </h3>
                        <div className="flex flex-col gap-4 sm:col-span-5">
                            <p className="leading-relaxed text-body">{featured.description}</p>
                            <p className="text-[13px] text-muted">{featured.technologies.join(" / ")}</p>
                            {featured.externalURL && (
                                <a
                                    href={featured.externalURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-draw self-start text-[15px] font-medium"
                                >
                                    Visit site ↗
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Remaining projects */}
            <div className="mt-24 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
                {rest.map((project, i) => (
                    <Reveal
                        key={project.name}
                        delay={(i % 2) * 0.08}
                        as="article"
                        className="group flex flex-col gap-4 border-t border-paper pt-4"
                    >
                        <div className="flex justify-between text-[13px] text-muted">
                            <span>{String(i + 2).padStart(2, "0")}</span>
                            <span>{project.duration}</span>
                        </div>
                        <ProjectImage project={project} className="aspect-[16/9]" />
                        <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">{project.name}</h3>
                            <ProjectLinks project={project} />
                        </div>
                        <p className="max-w-[36em] text-[15px] leading-relaxed text-body">{project.description}</p>
                        <p className="text-[13px] text-muted">{project.technologies.join(" / ")}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;
