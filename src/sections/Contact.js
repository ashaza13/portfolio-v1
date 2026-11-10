import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Rule from "../components/Rule";
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
        <section id="contact" className="container-page pb-24 sm:pb-32">
            <Rule />
            <Reveal className="flex flex-col items-center gap-8 pt-24 text-center sm:pt-32">
                <p className="text-[15px] text-muted">
                    <span className="font-semibold text-paper">05</span>
                    <span aria-hidden="true">{"  —  "}</span>
                    Contact
                </p>
                <h2 className="max-w-[10em] font-display text-[clamp(2.75rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
                    Let's build something together<span className="text-accent">.</span>
                </h2>
                <p className="max-w-[32em] text-[17px] leading-relaxed text-body">
                    I'm always open to new opportunities and interesting problems. Whether you're hiring, want to
                    collaborate on an AI project, or just want to say hi, my inbox is open.
                </p>

                <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    <a href={`mailto:${EMAIL}`} className="btn-solid h-[52px] px-[26px]">
                        Say hello <FiArrowUpRight aria-hidden="true" />
                    </a>
                    <button type="button" onClick={copyEmail} className="btn-line h-[52px] px-[26px]">
                        {copied ? "Copied ✓" : "Copy email"}
                    </button>
                </div>
                <span className="sr-only" aria-live="polite">
                    {copied ? "Email address copied to clipboard" : ""}
                </span>

                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-body">
                    {socials
                        .filter((s) => s.name !== "Email")
                        .map(({ name, href }) => (
                            <li key={name}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-draw hover:text-paper"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                </ul>
            </Reveal>
        </section>
    );
};

export default Contact;
