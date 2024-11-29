'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'; 

export default function Nav() {
const [isNavOpen, setIsNavOpen] = useState(false);

const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen);
};

return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black z-50 relative">
    <div className="flex items-center">
        <h1 className="text-white text-sm md:text-4xl font-sans cursor-pointer ml-3 md:ml-6">
        Manjil Maharjan
        </h1>
    </div>

    <div
        id="nav-menu"
        className={`absolute left-0 top-[90%] md:left-[550px] md:top-[80px] w-full flex flex-col gap-4 p-5 min-h-[30vh] md:flex md:flex-row md:items-center md:gap-8 md:w-auto md:min-h-fit transition-transform duration-300 ${
        isNavOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
        <ul className="text-white flex flex-col gap-4 md:flex-row md:gap-8 md:justify-evenly md:text-xl font-sans">
        <li className="text-white hover:text-slate-500">
            <Link href="/">Home</Link>
        </li>
        <li className="text-white hover:text-slate-500">
            <Link href="/project">Project Showcase</Link>
        </li>
        <li className="text-white hover:text-slate-500">
            <Link href="/about">About Me</Link>
        </li>
        <li className="text-white hover:text-slate-500">
            <Link href="/contact">Contact Info</Link>
        </li>
        </ul>
    </div>

    <button
        onClick={toggleNavMenu}
        aria-expanded={isNavOpen}
        aria-controls="nav-menu"
        className="md:hidden text-white text-2xl z-50"
    >
        {isNavOpen ? <RxCross1 /> : <RxHamburgerMenu />}
    </button>
    </nav>
);
}
