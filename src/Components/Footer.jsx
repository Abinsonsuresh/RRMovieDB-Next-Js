'use client'
import React from 'react';


import { AiOutlineInstagram, AiOutlineCopyrightCircle } from 'react-icons/ai';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from 'react-icons/fa';
// import ThemeToggleBtn from './ThemeToggleBtn'

const Footer = () => {
    return (
        <>
        <div className='mt-12 p-8'>
            <p className='text-center p-4 '>Copyright © 2024 RRMovieDB - Created by Abinson Suresh</p>
            <div className='flex items-center justify-center space-x-4'>

                <a href="https://github.com/Abinsonsuresh/" target="_blank"> <FaGithub size={25} /></a>
                <a href="https://www.linkedin.com/in/abinsonsuresh/" target="_blank"><FaLinkedin size={25} /></a>
                <a href="https://twitter.com/abinsonsuresh/" target="_blank">  <FaTwitter size={25} /></a>

            </div>
        </div>

        </>
    );
};

export default Footer;