import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Rule from "../components/Rule";
import { EASE } from "../components/Reveal";
import { experiences } from "../data";

// Inverted (light) band on the dark page. Each role opens in place; the + turns into ×.
const Experience = () => {
    const [open, setOpen] = useState(0);

    return (
        <section id="experience" className="bg-paper py-24 text-ink sm:py-32">
            <div className="container-page">
                <SectionHeading index="03" label="Experience" title="Where I've worked." light />

                <Rule className="bg-ink" />
                <ul>
                    {experiences.map((exp, i) => {
                        const isOpen = open === i;
                        const panelId = `exp-panel-${i}`;
                        return (
                            <li key={exp.company} className="border-b border-band-line">
                                <h3>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        className="grid-12 w-full items-baseline gap-y-1.5 py-7 text-left"
                                    >
                                        <span className="col-span-full text-sm text-band-muted md:col-span-3">
                                            {exp.duration}
                                        </span>
                                        <span className="col-span-3 font-display text-[1.4rem] font-medium tracking-[-0.025em] md:col-span-5 lg:text-[1.9rem]">
                                            {exp.company}
                                        </span>
                                        <span className="col-span-1 flex justify-end gap-4 text-[15px] text-band-body md:col-span-4 md:justify-between">
                                            <span className="hidden md:inline">{exp.position}</span>
                                            <motion.span
                                                aria-hidden="true"
                                                className="text-[22px] leading-none text-accent"
                                                animate={{ rotate: isOpen ? 45 : 0 }}
                                                transition={{ duration: 0.6, ease: EASE }}
                                            >
                                                +
                                            </motion.span>
                                        </span>
                                    </button>
                                </h3>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={panelId}
                                            key="panel"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.7, ease: EASE }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid-12 gap-y-6 pb-10">
                                                <div className="col-span-full flex flex-col gap-1 text-sm text-band-muted md:col-span-3">
                                                    <span className="text-ink md:hidden">{exp.position}</span>
                                                    <span>{exp.location}</span>
                                                </div>
                                                <ol className="col-span-full grid max-w-[56em] gap-4 md:col-span-9">
                                                    {exp.responsibilities.map((item, k) => (
                                                        <li
                                                            key={item}
                                                            className="grid grid-cols-[2rem_1fr] text-base leading-relaxed text-band-body"
                                                        >
                                                            <span className="text-band-muted">
                                                                {String(k + 1).padStart(2, "0")}
                                                            </span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ol>
                                                <p className="col-span-full text-[13px] tracking-[0.02em] text-band-muted md:col-start-4 md:col-span-9">
                                                    {exp.tags.join(" / ")}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
