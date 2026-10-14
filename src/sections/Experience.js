import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { experiences } from "../data";

const Experience = () => {
    const [active, setActive] = useState(0);
    const exp = experiences[active];

    return (
        <section id="experience" className="py-24 sm:py-32">
            <div className="container-page">
                <SectionHeading index="03" eyebrow="Experience" title="Where I've worked." />

                <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                    {/* Company tabs: horizontal scroller on mobile, vertical list on desktop */}
                    <div
                        role="tablist"
                        aria-label="Companies"
                        className="scrollbar-hide -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col lg:gap-1"
                    >
                        {experiences.map((item, i) => {
                            const selected = i === active;
                            return (
                                <button
                                    key={item.company}
                                    role="tab"
                                    id={`exp-tab-${i}`}
                                    aria-selected={selected}
                                    aria-controls="exp-panel"
                                    onClick={() => setActive(i)}
                                    className={`relative shrink-0 rounded-xl px-4 py-3 text-left transition-colors duration-200 lg:w-full ${
                                        selected ? "text-white" : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300"
                                    }`}
                                >
                                    {selected && (
                                        <motion.span
                                            layoutId="exp-active"
                                            className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.05]"
                                            transition={{ type: "spring", stiffness: 400, damping: 34 }}
                                        />
                                    )}
                                    <span className="relative block whitespace-nowrap text-sm font-medium">{item.company}</span>
                                    <span className="relative mt-0.5 hidden font-mono text-[11px] text-zinc-500 lg:block">
                                        {item.duration}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div
                        id="exp-panel"
                        role="tabpanel"
                        aria-labelledby={`exp-tab-${active}`}
                        className="card min-h-[22rem] p-6 sm:p-8 lg:col-span-8"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-xl font-medium text-white sm:text-2xl">{exp.position}</h3>
                                        <p className="mt-1 text-accent-soft">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-row gap-3 font-mono text-xs text-zinc-500 sm:flex-col sm:items-end sm:gap-1 sm:pt-1.5">
                                        <span>{exp.duration}</span>
                                        <span className="flex items-center gap-1">
                                            <FiMapPin aria-hidden="true" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="mt-8 space-y-4">
                                    {exp.responsibilities.map((item) => (
                                        <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-zinc-400">
                                            <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-8 flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <li key={tag} className="chip">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
