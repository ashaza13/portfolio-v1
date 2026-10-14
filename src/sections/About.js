import React from "react";
import ashaz from "../static/images/ashaz.jpg";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { FiMapPin } from "react-icons/fi";

const facts = [
    { label: "Currently", value: "Accenture Federal Services" },
    { label: "Education", value: "B.S. Computer Science, Virginia Tech" },
    { label: "Focus", value: "LLM agents · ML · Data platforms" },
];

const About = () => (
    <section id="about" className="py-24 sm:py-32">
        <div className="container-page">
            <SectionHeading index="01" eyebrow="About" title="Engineering at the intersection of AI and public service." />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal className="space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg lg:col-span-7">
                    <p>
                        Hello! I'm currently a <span className="text-zinc-100">Data &amp; AI Solutions Architect at Accenture Federal Services</span>,
                        where I build LLM-powered agents, ML systems, and analytics platforms that support over 14 million users in
                        the public sector.
                    </p>
                    <p>
                        My journey in computer science began as a kid, when I first discovered WordPress and built a website for a
                        science fair. That spark turned into a passion that has only grown stronger.
                    </p>
                    <p>
                        I earned my degree in <span className="text-zinc-100">Computer Science from Virginia Tech</span> and keep
                        working on projects that push what's possible with technology.
                    </p>

                    <dl className="!mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                        {facts.map((fact) => (
                            <div key={fact.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                                <dt className="w-28 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
                                    {fact.label}
                                </dt>
                                <dd className="text-base text-zinc-200">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>

                <Reveal delay={0.1} className="lg:col-span-5">
                    <figure className="group relative mx-auto max-w-sm lg:ml-auto">
                        <div
                            className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-b from-accent/50 via-white/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                            aria-hidden="true"
                        />
                        <div className="relative overflow-hidden rounded-[1.7rem] bg-ink-900 p-2">
                            <img
                                src={ashaz}
                                alt="Portrait of Ashaz Ahmed"
                                loading="lazy"
                                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0"
                            />
                            <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                                <span className="text-sm font-medium text-white">Ashaz Ahmed</span>
                                <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                                    <FiMapPin aria-hidden="true" /> Arlington, VA
                                </span>
                            </figcaption>
                        </div>
                    </figure>
                </Reveal>
            </div>
        </div>
    </section>
);

export default About;
