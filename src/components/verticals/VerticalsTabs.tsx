'use client';

import { useState } from 'react';

export default function VerticalsTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const verticalData = [
        {
            title: "Retail Operations",
            subtitle: "350+ Stores",
            desc: "We operate premium retail locations across India's finest malls, high streets, and commercial districts. Each store is a meticulously crafted brand experience that honors global standards while resonating with local sensibilities.",
            points: [
                "Store design, fit-out & VM management",
                "Staff immersion & brand certification",
                "Real-time inventory & POS systems",
                "P&L ownership with brand partner reporting"
            ],
            stats: [
                { value: "350+", label: "Stores" },
                { value: "18M+", label: "Annual Footfalls" }
            ]
        },
        {
            title: "Franchise Management",
            subtitle: "28 Brands",
            desc: "Our franchise model offers master franchise execution with unparalleled adherence to global compliance blueprints, ensuring scalable operations and rapid territorial expansion across tier-1 and tier-2 markets.",
            points: [
                "Legal framework & brand protection",
                "Multi-city growth blueprints",
                "Standardized customer experience auditing",
                "Omnichannel retail integration"
            ],
            stats: [
                { value: "28", label: "Brand Partners" },
                { value: "100%", label: "Compliance Rate" }
            ]
        },
        {
            title: "Distribution & Logistics",
            subtitle: "42 Cities",
            desc: "A high-performance supply chain backend built to withstand the complex geography of the Indian subcontinent. We manage temperature-controlled environments, end-to-end custom clearance, and secure long-haul shipping.",
            points: [
                "Centralized warehousing infrastructure",
                "Last-mile urban delivery networks",
                "Automated customs & clearance workflows",
                "Real-time predictive stock replenishments"
            ],
            stats: [
                { value: "42", label: "Cities Covered" },
                { value: "24-48h", label: "SLA Fulfillment" }
            ]
        },
        {
            title: "Market Entry Consulting",
            subtitle: "15+ Launches",
            desc: "Providing deep market intelligence for international brands looking to evaluate entry risk. From real estate landscape mapping to demographic purchasing-power analytics, we pave an optimal path to entry.",
            points: [
                "Regulatory compliance & entity mapping",
                "Consumer demographic sentiment analysis",
                "Competitive landscape discovery",
                "Strategic pricing model structuring"
            ],
            stats: [
                { value: "15+", label: "Successful Launches" },
                { value: "20+ Yrs", label: "Market Data Access" }
            ]
        }
    ];

    return (
        <div className="w-full">
            {/* Tab Navigation Controls */}
            <div className="flex flex-wrap border-b border-gray-800 mb-16 overflow-x-auto whitespace-nowrap">
                {verticalData.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`py-4 px-6 text-xs uppercase tracking-widest transition-all relative ${
                            activeTab === idx ? "text-white font-bold font-mono" : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        {tab.title}
                        {activeTab === idx && (
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white animate-fade-in" />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Side Content Area */}
                <div className="lg:col-span-7 space-y-8">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
                        {verticalData[activeTab].subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif text-white">
                        {verticalData[activeTab].title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                        {verticalData[activeTab].desc}
                    </p>

                    <ul className="space-y-3 text-xs text-gray-400 border-l border-gray-700 pl-4">
                        {verticalData[activeTab].points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="text-gray-600">—</span> {point}
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-12 pt-6 border-t border-gray-800 max-w-md">
                        {verticalData[activeTab].stats.map((stat, idx) => (
                            <div key={idx}>
                                <p className="text-3xl font-serif mb-1">{stat.value}</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Visual Block */}
                <div className="lg:col-span-5 aspect-square bg-gray-800 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-neutral-900/30 group-hover:bg-transparent transition-all duration-500"></div>
                    {/* Active Tab Overlay Indicator */}
                    <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 text-[10px] font-mono uppercase tracking-widest">
                        {verticalData[activeTab].title}
                    </div>
                </div>
            </div>
        </div>
    );
}