import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { socials, stats } from "../data";

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const Hero = () => (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32">
        {/* Backdrop: masked grid + soft accent glow */}
        <div
            className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
            aria-hidden="true"
        />
        <div
            className="absolute left-1/2 top-[-12rem] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] sm:w-[56rem]"
            aria-hidden="true"
        />

        <div className="container-page">
            <motion.a
                {...fadeUp(0)}
                href="#experience"
                className="chip mb-8 border-white/10 py-1.5 pl-2 pr-3 text-xs text-zinc-300 transition-colors hover:border-white/20"
            >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
                </span>
                Data &amp; AI Solutions Architect @ Accenture Federal Services
            </motion.a>

            <motion.h1
                {...fadeUp(0.08)}
                className="max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
                <span className="block">Ashaz Ahmed.</span>
                <span className="text-gradient block pb-1">I build AI systems people rely on.</span>
            </motion.h1>

            <motion.p
                {...fadeUp(0.16)}
                className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
                Software engineer specializing in LLM-powered agents, machine learning, and serverless data
                platforms that serve millions of people in the public sector.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn-primary group">
                    View my work
                    <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a href="#contact" className="btn-ghost">
                    Get in touch
                </a>
                <div className="ml-1 flex items-center gap-1">
                    {socials
                        .filter((s) => s.name !== "Email")
                        .map(({ name, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn border-transparent"
                                aria-label={name}
                            >
                                <Icon className="h-[18px] w-[18px]" />
                            </a>
                        ))}
                </div>
            </motion.div>

            <motion.dl
                {...fadeUp(0.32)}
                className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3"
            >
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-ink-950/90 px-5 py-5 backdrop-blur">
                        <dt className="sr-only">{stat.label}</dt>
                        <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{stat.value}</dd>
                        <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
                    </div>
                ))}
            </motion.dl>
        </div>

        <a
            href="#about"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-300 md:flex"
        >
            Scroll
            <FiArrowDown className="animate-bounce" aria-hidden="true" />
        </a>
    </section>
);

export default Hero;
