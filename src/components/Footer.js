import React from "react";
import { socials } from "../data";

const Footer = () => (
    <footer className="bg-paper text-ink">
        <div className="container-page grid-12 items-center gap-y-4 py-8 text-sm">
            <p className="col-span-full text-band-muted md:col-span-3">
                © {new Date().getFullYear()} Ashaz Ahmed
            </p>
            <ul className="col-span-full flex flex-wrap gap-x-6 gap-y-2 md:col-span-6 lg:col-span-5">
                {socials.map(({ name, href }) => (
                    <li key={name}>
                        <a
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="link-draw hover:text-band-muted"
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="col-span-full flex gap-6 md:col-span-3 md:justify-end lg:col-span-4">
                <a
                    href="https://github.com/ashaza13/portfolio-v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw hover:text-band-muted"
                >
                    Source
                </a>
                <a href="#top" className="link-draw hover:text-band-muted">
                    Back to top ↑
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
