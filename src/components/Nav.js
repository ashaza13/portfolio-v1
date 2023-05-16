import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useGlitch } from "react-powerglitch";
import Ashaz from "../static/Ashaz.pdf";
import { HashLink } from "react-router-hash-link";


const navigation = [
  { number: '01.', name: 'About', linkUrl: "#about" },
  { number: '02.', name: 'Experience', linkUrl: "#experience" },
  { number: '03.', name: 'Work', linkUrl: "#work" },
  { number: '04.', name: 'Contact', linkUrl: "#contact" },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const glitchButton = useGlitch({ playMode: "hover" });

  return (
    <div className="px-6 pt-6 lg:px-8 animate-fadeInDown">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="./" className="-m-1.5 p-1.5 text-white text-xl transition hover:scale-150 hover:text-orange-500" >
            A
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <HashLink key={item.name} to={item.linkUrl} smooth className="text-sm mt-2 font-semibold leading-6 text-white transition duration-500 hover:text-orange-500">
              <p className="inline-block text-orange-600 mr-1">{item.number}</p>
              {item.name}
            </HashLink>
          ))}
          <a href={Ashaz} download="Ashaz_Ahmed_Resume"><button ref={glitchButton.ref} className="bg-white text-black center px-8 py-2 transition hover:bg-black hover:text-white hover:drop-shadow-md">Resume</button></a>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <a href="./" className="-m-1.5 p-1.5 text-white text-xl transition hover:scale-150 hover:text-orange-500" >
              A
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <HashLink key={item.name} to={item.linkUrl} smooth className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
                    <p className="inline-block text-orange-600 mr-1">{item.number}</p>
                    {item.name}
                  </HashLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Nav;
