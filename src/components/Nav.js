import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiMenu, FiX, FiArrowDown } from "react-icons/fi";
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
    const active = useActiveSection(sectionIds);

    return (
        <header className="sticky top-0 z-50 border-b border-paper bg-ink/80 backdrop-blur-md">
            <nav aria-label="Global" className="container-page grid-12 h-16 items-center text-sm">
                <a href="#top" className="col-span-2 font-semibold tracking-[-0.01em] md:col-span-3">
                    Ashaz Ahmed
                </a>

                <div className="hidden gap-7 md:col-span-6 md:flex lg:col-span-5">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-current={active === item.id ? "true" : undefined}
                            className={`link-draw ${active === item.id ? "text-paper" : "text-body hover:text-paper"}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="col-span-2 flex items-center justify-end gap-6 md:col-span-3 lg:col-span-4">
                    <span className="hidden text-muted lg:inline">Reston, VA</span>
                    <a
                        href={Resume}
                        download="Ashaz_Ahmed_Resume.pdf"
                        className="btn-line hidden h-11 px-[18px] text-sm sm:inline-flex"
                    >
                        Resume
                        <FiArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <button
                        type="button"
                        className="-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel className="fixed inset-0 z-50 flex flex-col bg-ink px-5">
                    <div className="flex h-16 items-center justify-between border-b border-paper text-sm">
                        <span className="font-semibold">Ashaz Ahmed</span>
                        <button
                            type="button"
                            className="-mr-2 inline-flex h-11 w-11 items-center justify-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FiX className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <ul className="mt-4">
                        {navigation.map((item, i) => (
                            <li key={item.id} className="border-b border-hair">
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-baseline justify-between py-5 font-display text-3xl font-semibold tracking-heading"
                                >
                                    {item.name}
                                    <span className="font-sans text-sm font-normal tracking-normal text-muted">
                                        0{i + 1}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={Resume} download="Ashaz_Ahmed_Resume.pdf" className="btn-solid mt-8 w-full">
                        Download resume
                        <FiArrowDown aria-hidden="true" />
                    </a>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Nav;
