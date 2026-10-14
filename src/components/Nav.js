import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Resume from "../static/AshazAhmed.pdf";
import { navigation } from "../data";

const useActiveSection = (ids) => {
    const [active, setActive] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            // A section counts as active once it crosses the upper-middle of the viewport.
            { rootMargin: "-40% 0px -55% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [ids]);

    return active;
};

const sectionIds = navigation.map((item) => item.id);

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useActiveSection(sectionIds);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
            <nav
                aria-label="Global"
                className={`mx-auto flex max-w-content items-center justify-between rounded-full border py-2 pl-5 pr-2 transition-all duration-300 ${
                    scrolled
                        ? "border-white/10 bg-ink-900/75 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                        : "border-transparent bg-transparent"
                }`}
            >
                <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white font-mono text-xs text-ink-950">
                        AA
                    </span>
                    <span className="hidden sm:inline">Ashaz Ahmed</span>
                </a>

                <div className="hidden items-center gap-1 lg:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-current={active === item.id ? "true" : undefined}
                            className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                                active === item.id ? "bg-white/[0.08] text-white" : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <a href={Resume} download="Ashaz_Ahmed_Resume.pdf" className="btn-primary hidden py-2 sm:inline-flex">
                        <FiDownload aria-hidden="true" />
                        Resume
                    </a>
                    <button
                        type="button"
                        className="icon-btn lg:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
                <Dialog.Panel className="fixed inset-x-3 top-3 z-50 rounded-3xl border border-white/10 bg-ink-900 p-5 shadow-2xl">
                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-semibold text-white">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white font-mono text-xs text-ink-950">
                                AA
                            </span>
                            Ashaz Ahmed
                        </span>
                        <button type="button" className="icon-btn" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <FiX className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <ul className="mt-6 space-y-1">
                        {navigation.map((item, i) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg text-zinc-200 transition-colors hover:bg-white/[0.05] hover:text-white"
                                >
                                    {item.name}
                                    <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={Resume} download="Ashaz_Ahmed_Resume.pdf" className="btn-primary mt-6 w-full py-3">
                        <FiDownload aria-hidden="true" />
                        Download resume
                    </a>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Nav;
