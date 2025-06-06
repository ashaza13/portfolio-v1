import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useGlitch } from "react-powerglitch";
import Ashaz from "../static/AshazAhmed.pdf";
import { HashLink } from "react-router-hash-link";


const navigation = [
  { name: 'About', linkUrl: "#about" },
  { name: 'Skills', linkUrl: "#skills" },
  { name: 'Experience', linkUrl: "#experience" },
  { name: 'Projects', linkUrl: "#work" },
  { name: 'Contact', linkUrl: "#contact" },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const glitchButton = useGlitch({ playMode: "hover" });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 lg:px-8 animate-fadeInDown">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="./" className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300" >
            A
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-white hover:text-gray-300 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <HashLink 
              key={item.name} 
              to={item.linkUrl} 
              smooth 
              className="text-sm font-medium text-white hover:text-orange transition-colors duration-300"
            >
              {item.name}
            </HashLink>
          ))}
          <a href={Ashaz} download="Ashaz_Ahmed_Resume">
            <button 
              ref={glitchButton.ref} 
              className="ml-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Resume
            </button>
          </a>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-black lg:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <a href="./" className="text-white text-2xl font-bold tracking-wider" >
              A
            </a>
            <button
              type="button"
              className="rounded-xl p-2.5 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <HashLink 
                    key={item.name} 
                    to={item.linkUrl} 
                    smooth 
                    className="-mx-3 block rounded-xl py-4 px-4 text-lg font-medium text-gray-400 hover:text-white hover:bg-gray-900 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </HashLink>
                ))}
                <div className="pt-4">
                  <a href={Ashaz} download="Ashaz_Ahmed_Resume">
                    <button className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Nav;
