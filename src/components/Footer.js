import React from "react";
import { socials } from "../data";

const Footer = () => (
    <footer className="border-t border-white/[0.06]">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
            <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} Ashaz Ahmed ·{" "}
                <a
                    href="https://github.com/ashaza13/portfolio-v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-zinc-300"
                >
                    View source
                </a>
            </p>
            <ul className="flex items-center gap-1">
                {socials.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                        <a
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="icon-btn border-transparent"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
);

export default Footer;
