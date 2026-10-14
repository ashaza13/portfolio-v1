import React, { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { EMAIL, socials } from "../data";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section id="contact" className="py-24 sm:py-32">
            <div className="container-page">
                <Reveal className="card relative isolate overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-24">
                    <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
                    <div
                        className="absolute left-1/2 top-full -z-10 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]"
                        aria-hidden="true"
                    />

                    <p className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                        <span className="text-zinc-500">05</span>
                        <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
                        Contact
                    </p>
                    <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        Let's build something together.
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        I'm always open to new opportunities and interesting problems. Whether you're hiring, want to
                        collaborate on an AI project, or just want to say hi, my inbox is open.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a href={`mailto:${EMAIL}`} className="btn-primary w-full px-6 py-3 sm:w-auto">
                            Say hello <FiArrowUpRight aria-hidden="true" />
                        </a>
                        <button type="button" onClick={copyEmail} className="btn-ghost w-full px-6 py-3 font-mono text-[13px] sm:w-auto">
                            {copied ? <FiCheck className="text-emerald-400" aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                            {copied ? "Copied!" : EMAIL}
                        </button>
                    </div>
                    <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>

                    <ul className="mt-10 flex items-center justify-center gap-2">
                        {socials
                            .filter((s) => s.name !== "Email")
                            .map(({ name, href, icon: Icon }) => (
                                <li key={name}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="icon-btn">
                                        <Icon className="h-4 w-4" />
                                    </a>
                                </li>
                            ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
