'use client'
import React, { useState } from 'react';
import ThemeToggleBtn from './ThemeToggleBtn ';
import { MdOutlineSearch } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false);

    const shownav = () => {
        setNav(!nav);
    };

    const NavProperties = (data) => {
        if (data === 'movies') {
            router.push('/movies');
        }
        if (data === 'tvshows') {
            router.push('/tvshows');
        }
        if (data === 'home') {
            router.push('/');
        }

        shownav();
    };

    return (
        <>
            <div className="fixed"></div>

            <div className="flex justify-between items-center p-4">
                <div>
                    <div className="text-xl font-bold cursor-pointer" onClick={() => NavProperties('home')}>
                        <span className="text-orange-200">RR</span>
                        <span className="text-orange-400">Movie</span>
                        <span className="text-orange-50">DB</span>
                    </div>
                </div>

                <div className=" gap-3 hidden md:flex">
                    <ul className="flex gap-3 justify-center items-center">
                        <li className="cursor-pointer" onClick={() => NavProperties('home')}>
                            Home
                        </li>
                        <li className="cursor-pointer" onClick={() => NavProperties('movies')}>
                            Movies
                        </li>
                        <li className="cursor-pointer" onClick={() => NavProperties('tvshows')}>
                            TV Shows
                        </li>
                    </ul>

                    <div className="flex justify-center items-center gap-3 ">
                        <ThemeToggleBtn />
                        <MdOutlineSearch size={20} className="cursor-pointer" />
                    </div>

                    <div className="flex justify-center items-center gap-3 ">
                        <button className="border px-4 py-2 text-white font-bold rounded-lg">Sign Up</button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div className="md:hidden flex justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-3">
                        <ThemeToggleBtn />
                        <MdOutlineSearch size={20} className="cursor-pointer" />
                        <SlMenu className="cursor-pointer" onClick={() => shownav()} />
                    </div>

                    <div
                        className={
                            nav
                                ? 'fixed  bg-primary shadow-2xl h-[100%] w-[60%] z-50 top-0 right-0 flex flex-col justify-between ease-in duration-100'
                                : 'fixed right-[-100%]  h-[70%] flex flex-col items-center justify-between ease-in'
                        }
                    >
                        <div className="absolute top-0 right-0 p-6">
                            <VscChromeClose size={20} className="cursor-pointer" onClick={() => shownav()} />
                        </div>

                        <div>
                            <ul className="flex justify-start flex-col gap-9 p-6 mt-12 w-full">
                                <li
                                    className="cursor-pointer border-b border-[#a0a0a01b] "
                                    onClick={() => NavProperties('home')}
                                >
                                    Home
                                </li>
                                <li
                                    className="cursor-pointer border-b border-[#a0a0a01b]"
                                    onClick={() => NavProperties('movies')}
                                >
                                    Movies
                                </li>
                                <li
                                    className="cursor-pointer border-b border-[#a0a0a01b]"
                                    onClick={() => NavProperties('tvshows')}
                                >
                                    TV Shows
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 flex justify-center">
                            <button className="bg-orange-400 px-12 py-2 text-white font-bold rounded-full">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
