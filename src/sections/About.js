import React from "react";
import ashaz from "../static/images/ashaz.jpg";
import Reveal from "../components/Reveal";

const facts = [
    { label: "Currently", value: "Backend Engineer, Takt" },
    { label: "Previously", value: "Accenture Federal Services, GDIT" },
    { label: "Education", value: "B.S. Computer Science, Virginia Tech" },
    { label: "Focus", value: "Streaming data, Go, distributed systems" },
];

const About = () => (
    <section id="about" className="container-page py-24 sm:py-32">
        <div className="grid-12 gap-y-12">
            <Reveal className="col-span-full flex flex-col gap-1.5 text-[15px] md:col-span-3">
                <span className="font-display font-semibold">01</span>
                <span className="text-muted">About</span>
            </Reveal>

            <Reveal className="col-span-full flex flex-col gap-6 md:col-span-5">
                <h2 className="heading-2 mb-2">Building the real-time backbone of modern software.</h2>
                <p className="text-[17px] leading-[1.65] text-body">
                    Hello! I'm a <span className="text-paper">backend engineer at Takt</span>, where we're building a
                    modern workforce platform that benefits from AI without relying on it. I architected and built our
                    real-time data streaming pipelines on Google Cloud, which process around a billion rows a day, along
                    with our notification, gamification, and Learning Curve systems.
                </p>
                <p className="text-[17px] leading-[1.65] text-body">
                    Before Takt, I was a Data &amp; AI Solutions Architect at Accenture Federal Services, where I shipped
                    LLM-powered agents and ML systems that supported over 14 million users in the public sector.
                </p>
                <p className="text-[17px] leading-[1.65] text-body">
                    My journey in computer science began as a kid, when I first discovered WordPress and built a website
                    for a science fair. I earned my degree in{" "}
                    <span className="text-paper">Computer Science from Virginia Tech</span> and keep working on projects
                    that push what's possible with technology.
                </p>

                <dl className="mt-6 border-t border-paper">
                    {facts.map((fact) => (
                        <div
                            key={fact.label}
                            className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-hair py-3.5 text-[15px]"
                        >
                            <dt className="text-muted">{fact.label}</dt>
                            <dd>{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </Reveal>

            <Reveal delay={0.1} as="figure" className="group col-span-full flex flex-col gap-3 md:col-span-4">
                <div className="aspect-[4/5] overflow-hidden bg-surface">
                    <img
                        src={ashaz}
                        alt="Portrait of Ashaz Ahmed"
                        loading="lazy"
                        className="img-swiss h-full w-full object-cover"
                    />
                </div>
                <figcaption className="flex justify-between text-[13px] text-muted">
                    <span>Ashaz Ahmed</span>
                    <span>Northern Virginia</span>
                </figcaption>
            </Reveal>
        </div>
    </section>
);

export default About;
