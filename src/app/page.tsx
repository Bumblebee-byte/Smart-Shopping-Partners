import React from 'react';
import { client } from '@/sanity/lib/client';
import HeroSlideshow from '@/components/home/HeroSlideshow';
import Link from 'next/link';

// Define the shape of our data
interface PageData {
    stats: {
        stores: string;
        brands: string;
        cities: string;
        footfalls: string;
    };
    hero: {
        slides: any[];
    };
}

export default async function HomePage() {
    // 1. Fetching data from Sanity
    const statsQuery = `*[_type == "companyStats"][0]`;
    const heroQuery = `*[_type == "heroSlideshow"][0]`;

    const [stats, hero] = await Promise.all([
        client.fetch(statsQuery),
        client.fetch(heroQuery)
    ]);

    return (
        <main className="bg-[#0b1120] text-white">

            {/* HERO SECTION WITH DYNAMIC SLIDESHOW */}
            <section className="relative w-full h-[85vh] border-b border-gray-800">
                {/* The Slideshow Layer */}
                {hero?.slides ? (
                    <HeroSlideshow images={hero.slides} />
                ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">Loading...</div>
                )}

                {/* The Text Overlay Layer */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center pointer-events-none">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 border-l border-gray-600 pl-4">
                            India's Premier Retail Growth Partner
                        </p>
                        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 max-w-3xl leading-tight pointer-events-auto">
                            Think Beyond.<br/>Metros.
                        </h1>
                        <div className="pointer-events-auto">
                            <Link href="/portfolio" className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors inline-block">
                                View Portfolio →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* DYNAMIC STATISTICS BAR */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
                    {[
                        { label: 'Stores', val: stats?.stores || '350+' },
                        { label: 'Brand Partners', val: stats?.brands || '28' },
                        { label: 'Cities', val: stats?.cities || '42' },
                        { label: 'Annual Footfalls', val: stats?.footfalls || '18M+' },
                    ].map((item) => (
                        <div key={item.label}>
                            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{item.val}</h3>
                            <p className="text-[9px] text-gray-500 uppercase tracking-widest">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* A CURATED UNIVERSE SECTION */}
            <section className="py-24 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif italic mb-12">
                        A Curated Universe <br/>
                        <span className="text-gray-500">of Global Prestige</span>
                    </h2>
                    {/* Add your grid or cards here */}
                </div>
            </section>

        </main>
    );
}