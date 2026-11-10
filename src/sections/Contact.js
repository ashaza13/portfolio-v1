import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Resume from "../static/AshazAhmed.pdf";
import { EMAIL, socials } from "../data";

// The address is the headline.
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
        <section id="contact" className="container-page pb-[72px]">
            <SectionHeader index="05" title="Write to" note="Hiring, collaborating, or saying hi" />
            <div className="pt-4">
                <a
                    href={`mailto:${EMAIL}`}
                    className="mail-link inline-block break-all pb-2.5 text-[clamp(1.75rem,6.6vw,6.75rem)] font-semibold leading-none tracking-[-0.045em]"
                >
                    {EMAIL}
                </a>
            </div>
            <ul className="label mt-10 flex flex-wrap gap-x-7 gap-y-3">
                {socials.map(({ name, href }) => (
                    <li key={name}>
                        <a href={href} target="_blank" rel="noopener noreferrer">
                            {name} ↗
                        </a>
                    </li>
                ))}
                <li>
                    <a href={Resume} download="Ashaz_Ahmed_Resume.pdf">
                        CV (PDF) ↓
                    </a>
                </li>
                <li>
                    <button type="button" onClick={copyEmail} className="label text-muted hover:text-accent">
                        {copied ? "Copied ✓" : "Copy address"}
                    </button>
                    <span className="sr-only" aria-live="polite">
                        {copied ? "Email address copied to clipboard" : ""}
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
