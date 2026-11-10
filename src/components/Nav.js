import React, { useEffect, useState } from "react";
import Resume from "../static/AshazAhmed.pdf";
import { navigation } from "../data";
import Clock from "./Clock";

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

// A departure-board strip: name, role, live Reston clock, links.
const Nav = () => {
    const active = useActiveSection(sectionIds);

    return (
        <header className="sticky top-0 z-50 border-b border-paper bg-ink/90 backdrop-blur-md">
            <nav aria-label="Global" className="container-page label grid-12 h-[52px] items-center text-muted">
                <a href="#top" className="col-span-2 font-medium text-paper md:col-span-3">
                    Ashaz Ahmed
                </a>
                <span className="hidden md:col-span-3 md:block">Backend engineer, Takt</span>
                <span className="hidden md:col-span-3 md:block">
                    Reston VA{"  "}
                    <Clock /> ET
                </span>
                <ul className="col-span-2 flex justify-end gap-4 whitespace-nowrap sm:gap-5 md:col-span-3">
                    {navigation.map((item) => (
                        <li key={item.id} className={item.id === "systems" ? "hidden sm:block" : undefined}>
                            <a
                                href={`#${item.id}`}
                                aria-current={active === item.id ? "true" : undefined}
                                className={active === item.id ? "text-paper" : undefined}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={Resume} download="Ashaz_Ahmed_Resume.pdf">
                            CV ↓
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
