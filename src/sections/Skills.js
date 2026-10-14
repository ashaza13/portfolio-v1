import React from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { skillCategories } from "../data";

const Skills = () => (
    <section id="skills" className="py-24 sm:py-32">
        <div className="container-page">
            <SectionHeading
                index="02"
                eyebrow="Skills"
                title="A toolkit built for shipping intelligent systems."
                description="The languages, frameworks, and platforms I use to take ideas from prototype to production."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, i) => (
                    <Reveal
                        key={category.title}
                        delay={i * 0.05}
                        className={`card group relative overflow-hidden p-6 transition-colors duration-300 hover:border-white/[0.14] ${
                            category.wide ? "md:col-span-2" : ""
                        }`}
                    >
                        <div
                            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                            aria-hidden="true"
                        />
                        <h3 className="text-lg font-medium text-white">{category.title}</h3>
                        <p className="mt-1 text-sm text-zinc-500">{category.description}</p>
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {category.skills.map(({ icon: Icon, name }) => (
                                <li
                                    key={name}
                                    className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-accent/40 hover:text-white"
                                >
                                    <Icon className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
