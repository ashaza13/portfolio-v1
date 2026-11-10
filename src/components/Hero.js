import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { EASE } from "./Reveal";
import Rule from "./Rule";

const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay, ease: EASE },
});

// Each line slides up from behind a clipping mask.
const MaskLine = ({ children, delay }) => (
    <span className="block overflow-hidden pb-[0.05em]">
        <motion.span
            className="block"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay, ease: EASE }}
        >
            {children}
        </motion.span>
    </span>
);

const Hero = () => (
    <section id="top" className="container-page pt-16 sm:pt-24">
        <motion.div {...fade(0)} className="grid-12 gap-y-2 pb-5 text-[13px] text-muted">
            <span className="col-span-2 md:col-span-3">Portfolio / {new Date().getFullYear()}</span>
            <span className="col-span-2 text-right md:col-span-5 md:text-left">Backend Engineer at Takt</span>
            <span className="col-span-full hidden items-center justify-end gap-2 md:col-span-4 md:flex">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Open to conversations
            </span>
        </motion.div>

        <h1 className="font-display text-[clamp(4rem,15vw,14.5rem)] font-semibold leading-[0.86] tracking-display">
            <MaskLine delay={0.08}>Ashaz</MaskLine>
            <MaskLine delay={0.16}>
                Ahmed<span className="text-accent">.</span>
            </MaskLine>
        </h1>

        <div className="mt-10">
            <Rule animateOnMount delay={0.28} />
        </div>

        <div className="grid-12 gap-y-8 pb-20 pt-10 sm:pb-28">
            <motion.p
                {...fade(0.4)}
                className="col-span-full max-w-[15em] font-display text-[1.65rem] font-medium leading-[1.12] tracking-[-0.025em] md:col-span-6 lg:text-[2.4rem]"
            >
                I build real-time systems that turn data into decisions.
            </motion.p>
            <motion.div
                {...fade(0.52)}
                className="col-span-full flex flex-col gap-8 md:col-span-6 md:border-l md:border-line md:pl-6"
            >
                <p className="max-w-[34em] text-[17px] leading-relaxed text-body">
                    Backend engineer building streaming pipelines and services in Go and Python on Google Cloud.
                    Before Takt, I shipped LLM-powered agents that served millions of people in the public sector.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href="#work" className="btn-solid group">
                        View work
                        <FiArrowRight
                            className="transition-transform duration-300 ease-swiss group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </a>
                    <a href="#contact" className="btn-line">
                        Get in touch
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
