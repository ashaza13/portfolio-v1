import React, { useState } from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { projects } from "../data";

const ProjectLinks = ({ project }) => (
    <div className="flex items-center gap-1">
        {project.link && (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
                className="icon-btn h-9 w-9 border-transparent"
            >
                <FiGithub className="h-4 w-4" />
            </a>
        )}
        {project.externalURL && (
            <a
                href={project.externalURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                className="icon-btn h-9 w-9 border-transparent"
            >
                <FiArrowUpRight className="h-4 w-4" />
            </a>
        )}
    </div>
);

const ProjectImage = ({ project, className = "" }) => {
    const [failed, setFailed] = useState(false);
    const href = project.externalURL || project.link;
    const img = failed ? (
        <div className="bg-grid flex h-full w-full items-center justify-center">
            <span className="text-3xl font-semibold tracking-tight text-zinc-600 sm:text-4xl">{project.name}</span>
        </div>
    ) : (
        <img
            onError={() => setFailed(true)}
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
    );
    return (
        <div className={`relative overflow-hidden rounded-xl border border-white/[0.06] bg-ink-800 ${className}`}>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                    {img}
                </a>
            ) : (
                img
            )}
        </div>
    );
};

const Tags = ({ items }) => (
    <ul className="flex flex-wrap gap-2">
        {items.map((tech) => (
            <li key={tech} className="chip">
                {tech}
            </li>
        ))}
    </ul>
);

const Projects = () => {
    const [featured, ...rest] = projects;

    return (
        <section id="work" className="py-24 sm:py-32">
            <div className="container-page">
                <SectionHeading
                    index="04"
                    eyebrow="Projects"
                    title="Selected work."
                    description="Apps and experiments, from production iOS apps to autonomous-driving simulations."
                />

                {/* Featured project */}
                <Reveal className="card group grid grid-cols-1 gap-6 p-3 sm:p-4 lg:grid-cols-12 lg:gap-10">
                    <ProjectImage project={featured} className="aspect-[16/10] lg:col-span-7" />
                    <div className="flex flex-col px-3 pb-3 lg:col-span-5 lg:px-0 lg:py-6 lg:pr-6">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Featured</span>
                            {featured.isAppStore && (
                                <span className="chip border-accent/30 bg-accent-muted text-accent-soft">
                                    <FaApple aria-hidden="true" /> App Store
                                </span>
                            )}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{featured.name}</h3>
                        <p className="mt-1 font-mono text-xs text-zinc-500">{featured.duration}</p>
                        <p className="mt-5 leading-relaxed text-zinc-400">{featured.description}</p>
                        <div className="mt-6">
                            <Tags items={featured.technologies} />
                        </div>
                        <div className="mt-auto flex items-center gap-3 pt-8">
                            {featured.externalURL && (
                                <a href={featured.externalURL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    Visit site <FiArrowUpRight aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    </div>
                </Reveal>

                {/* Remaining projects */}
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {rest.map((project, i) => (
                        <Reveal
                            key={project.name}
                            delay={(i % 2) * 0.08}
                            as="article"
                            className="card group flex flex-col p-3 transition-colors duration-300 hover:border-white/[0.14] sm:p-4"
                        >
                            <ProjectImage project={project} className="aspect-[16/9]" />
                            <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-white">{project.name}</h3>
                                        <p className="mt-0.5 font-mono text-xs text-zinc-500">{project.duration}</p>
                                    </div>
                                    <ProjectLinks project={project} />
                                </div>
                                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-400">{project.description}</p>
                                <div className="mt-5">
                                    <Tags items={project.technologies} />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
