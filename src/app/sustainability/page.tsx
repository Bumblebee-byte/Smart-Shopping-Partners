import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sustainability | Smart Shopping Partners',
    description: 'Our commitment to sustainable retail and ethical business practices.',
};

export default function SustainabilityPage() {
    return (
        <div className="min-h-screen py-24 px-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-16 border-b border-gray-800 pb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 border-l pl-4 border-gray-600">
                    Our Responsibility
                </p>
                <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white">
                    Building a Sustainable Future.
                </h1>
                <p className="text-gray-400 max-w-2xl leading-relaxed text-sm">
                    At Smart Shopping, we believe that retail growth must be balanced with environmental stewardship and social responsibility. Our operations are designed to minimize footprint while maximizing positive community impact.
                </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="border border-gray-800 p-8 hover:bg-[#161f30] transition-colors group">
                    <h3 className="text-xl font-serif text-gray-200 mb-4 group-hover:text-white transition-colors">
                        Ethical Sourcing
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        We partner exclusively with brands that adhere to strict environmental and labor standards, ensuring transparency across the entire supply chain.
                    </p>
                </div>

                {/* Pillar 2 */}
                <div className="border border-gray-800 p-8 hover:bg-[#161f30] transition-colors group">
                    <h3 className="text-xl font-serif text-gray-200 mb-4 group-hover:text-white transition-colors">
                        Green Footprint
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Optimizing energy consumption across our store network with smart lighting, efficient cooling, and renewable energy integration.
                    </p>
                </div>

                {/* Pillar 3 */}
                <div className="border border-gray-800 p-8 hover:bg-[#161f30] transition-colors group">
                    <h3 className="text-xl font-serif text-gray-200 mb-4 group-hover:text-white transition-colors">
                        Community Impact
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Creating localized job opportunities and investing in skills development programs across all the cities we operate in.
                    </p>
                </div>
            </div>
        </div>
    );
}