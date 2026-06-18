import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col justify-center border-b border-gray-800">

            {/* --- LAYER 1 & 2: BACKGROUND IMAGE & GRADIENT --- */}
            <div className="absolute inset-0 z-0">
                {/* Replace this URL with your actual store/retail image */}
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Retail Store"
                    className="w-full h-full object-cover"
                />

                {/* THE MAGIC GRADIENT: Solid dark on left -> semi-transparent middle -> mostly clear right */}
                {/* If your site background is slightly different, change #0b1120 to #111827 or your exact hex code */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/90 to-transparent"></div>
            </div>

            {/* --- LAYER 3: THE CONTENT --- */}
            {/* 'relative' and 'z-10' are crucial here so the text doesn't disappear behind the image */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 border-l border-gray-600 pl-4">
                    India's Premier Retail Growth Partner
                </p>

                <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 max-w-3xl leading-tight">
                    Think Beyond.<br/>Metros.
                </h1>

                <p className="text-gray-400 max-w-xl text-sm leading-relaxed mb-12">
                    Building curated universes of global prestige. We bridge the gap between premium international brands and India's fastest-growing retail markets.
                </p>

                <Link href="/portfolio" className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors inline-block">
                    View Portfolio →
                </Link>
            </div>

        </section>
    );
}