import React from "react";
import SectionHeading from "../components/SectionHeading";
import Rule from "../components/Rule";
import { skillCategories } from "../data";
import Reveal from "../components/Reveal";

const Skills = () => (
    <section id="skills" className="container-page pb-24 sm:pb-32">
        <SectionHeading index="02" label="Skills" title="A toolkit built for shipping systems at scale." />

        <Rule />
        <ul>
            {skillCategories.map((category, i) => (
                <Reveal
                    as="li"
                    key={category.title}
                    delay={i * 0.04}
                    className="grid-12 items-baseline gap-y-2 border-b border-hair py-[22px] transition-colors duration-500 ease-swiss hover:bg-[#141414]"
                >
                    <span className="col-span-full text-[13px] text-muted md:col-span-3">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="col-span-full text-xl font-medium tracking-[-0.015em] md:col-span-5">
                        {category.title}
                    </h3>
                    <p className="col-span-full text-[15px] leading-relaxed text-body md:col-span-4">
                        {category.skills.map((s) => s.name).join(", ")}
                    </p>
                </Reveal>
            ))}
        </ul>
    </section>
);

export default Skills;
