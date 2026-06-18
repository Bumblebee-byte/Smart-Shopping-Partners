"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Define the navigation links in an array to keep the code clean
    const navLinks = [
        { name: 'ABOUT', href: '/about' },
        { name: 'BRANDS', href: '/brands' },
        { name: 'VERTICALS', href: '/verticals' },
        { name: 'STORES', href: '/stores' },
        { name: 'PARTNER', href: '/partner' },
        { name: 'CAREERS', href: '/careers' },
        { name: 'NEWS', href: '/news' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <header className="w-full border-b border-gray-800 z-40 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* LOGO SECTION */}
                <Link href="/" className="flex flex-col z-50 relative">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white">
            SMART SHOPPING
          </span>
                    <span className="text-[7px] md:text-[8px] text-gray-400 tracking-[0.3em] mt-1">
            RETAIL • FRANCHISE • LIFESTYLE
          </span>
                </Link>

                {/* DESKTOP NAVIGATION (Hidden on mobile) */}
                <nav className="hidden xl:flex items-center space-x-8 text-[11px] uppercase tracking-widest font-semibold text-gray-300">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* DESKTOP "PARTNER WITH US" BUTTON (Hidden on mobile) */}
                <div className="hidden xl:block">
                    <Link href="/partner" className="border border-white px-6 py-3 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                        Partner With Us
                    </Link>
                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    className="xl:hidden p-2 text-white z-50 relative focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        // Close (X) Icon
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Menu (Hamburger) Icon
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* MOBILE SIDEBAR / DRAWER */}
            {/* The background overlay backdrop */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* The sliding drawer menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#0b1120] border-l border-gray-800 z-40 transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col pt-32 px-8 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col space-y-6 text-sm uppercase tracking-[0.2em] text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors border-b border-gray-800 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu when a link is clicked
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-12">
                    <Link
                        href="/partner"
                        className="block text-center border border-white px-6 py-4 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Partner With Us
                    </Link>
                </div>
            </div>
        </header>
    );
}